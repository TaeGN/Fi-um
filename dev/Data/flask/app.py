from flask import Flask, render_template_string, jsonify
import pandas as pd
import numpy as np
import pymysql
from pypfopt.efficient_frontier import EfficientFrontier
from pypfopt import risk_models, expected_returns
from pypfopt.discrete_allocation import DiscreteAllocation, get_latest_prices

app = Flask(__name__)

assets = ["공", "스피드킹", "마법쿠키", "해적선", "고양이"]
df = pd.DataFrame()


def makeValance(searchTime):
    weights = np.array([0.2, 0.2, 0.2, 0.2, 0.2])

    conn = pymysql.connect(
        host="j9a308.p.ssafy.io",
        user="root",
        password="1q2w3e4r1!@",
        db="backend",
        charset="utf8",
    )

    cur = conn.cursor()

    countStock = 0
    for i in range(1, 6):
        cur.execute(
            f"SELECT now_price FROM stock_data WHERE stock_no = {i} And search_no < {searchTime}"
        )
        rows = cur.fetchall()
        prices = [row[0] for row in rows]
        countStock = len(prices)
        df[assets[i - 1]] = prices

    # 임시저장된 데이터 커밋
    conn.commit()

    # 연결 종료
    conn.close()

    returns = df.pct_change()

    cov_matrix_annual = returns.cov() * countStock
    port_variance = np.dot(weights.T, np.dot(cov_matrix_annual, weights))

    port_volatillity = np.sqrt(port_variance)

    portfolioSimpleAnnualReturn = np.sum(returns.mean() * weights) * countStock
    percent_var = str(round(port_variance, 2) * 100) + "%"
    percent_vols = str(round(port_volatillity, 2) * 100) + "%"
    percent_ret = str(round(portfolioSimpleAnnualReturn, 2) * 100) + "%"
    print("예산 수익 : " + percent_ret)
    print("위험 및 분산 : " + percent_vols)
    print("변동성 : " + percent_var)

    mu = expected_returns.mean_historical_return(df)
    S = risk_models.sample_cov(df)

    ef = EfficientFrontier(mu, S)
    weights = ef.max_sharpe()
    cleaned_weights = ef.clean_weights()
    print(cleaned_weights)
    ef.portfolio_performance(verbose=True)

    return cleaned_weights


def makeCountValance(searchTime, money):
    try:
        cleaned_weights = makeValance(searchTime)
        latest_prices = get_latest_prices(df)
        weights = cleaned_weights
        da = DiscreteAllocation(weights, latest_prices, total_portfolio_value=money)
        allocation, leftover = da.lp_portfolio()
        print("Discrete allocation :", allocation)
        print("Funds remaining : W{:.2f}".format(leftover))

        obj = {
            "공룡": int(allocation.get("공", 0)),
            "스피드킹": int(allocation.get("스피드킹", 0)),
            "마법쿠키": int(allocation.get("마법쿠키", 0)),
            "해적선": int(allocation.get("해적선", 0)),
            "고양이": int(allocation.get("고양이", 0)),
        }
        return jsonify(obj)
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route("/<int:searchTime>")
def valance(searchTime):
    return makeValance(searchTime)


@app.route("/<int:searchTime>/<int:money>")
def makeCount(searchTime, money):
    return makeCountValance(searchTime, money)


if __name__ == "__main__":
    app.run(debug=True)
