package com.example.pium.service;

import com.example.pium.dto.*;
import com.example.pium.entity.*;
import com.example.pium.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class StockServiceImp {
    private final StockEventRepository stockEventRepository;
    private final StockAccountRepository stockAccountRepository;
    private final StockDataRepository stockDataRepository;
    private final StockNewsRepository stockNewsRepository;
    private final StockTradeRepository stockTradeRepository;
    private final PointServiceImp pointService;
    private final UserRepository userRepository;
    private final PointTypeRepository pointTypeRepository;
    private final BalanceSheetRepository balanceSheetRepository;
    public Long startTime = Long.valueOf(1696377600);

    public StockDataDto makeDtoData(StockDataEntity stockDataEntity) {
        StockDataDto stockData = new StockDataDto();
        stockData.setStockNo(stockDataEntity.getStockNo().getStockNo());
        stockData.setStockName(stockDataEntity.getStockNo().getStockName());
        stockData.setNowPrice(stockDataEntity.getNowPrice());
        stockData.setFluctuationPrice(stockDataEntity.getFluctuationPrice());
        stockData.setSearchNo(stockDataEntity.getSearchNo());
        return stockData;
    }

    public StockEventEntity getStockType(Integer stockNo) {return stockEventRepository.findById(stockNo).orElse(null);
    }

    public Boolean getStockNow(Integer stockNo, Integer stockPrice) {
        Long nowTime = System.currentTimeMillis() / 1000;
        int searchTime = (int) Math.floor( (nowTime - startTime) / 60 );
        if (searchTime % 2 != 0) {
            searchTime = searchTime - 1;
        }
        StockDataEntity stockDataEntity = stockDataRepository.findByStockNoAndSearchNo(getStockType(stockNo), searchTime);
        if (stockPrice.equals(stockDataEntity.getNowPrice())) {
            return true;
        } else {
            return false;
        }
    }

    public List<StockDataDto> getAllData() {
        Long nowTime = System.currentTimeMillis() / 1000;
        int searchTime = (int) Math.floor( (nowTime - startTime) / 60 );
        if (searchTime % 2 != 0) {
            searchTime = searchTime - 1;
        }
        List<StockDataEntity> stockList = stockDataRepository.findBySearchNo(searchTime);
        List<StockDataDto> stockDto = new ArrayList<>();
        for (StockDataEntity stockDetail : stockList) {
            StockDataDto stockDataDto = makeDtoData(stockDetail);
            stockDto.add(stockDataDto);
        }
        return stockDto;
    }

    public List<StockDataDto> getDetailData(Integer stockNo) {
        StockEventEntity stockEventEntity = getStockType(stockNo); // StockNo가 1인 엔터티를 가져옵니다.
        Long nowTime = System.currentTimeMillis() / 1000;
        int searchTime = (int) Math.floor( (nowTime - startTime) / 60 );
        if (searchTime % 2 != 0) {
            searchTime = searchTime - 1;
        }
        List<StockDataEntity> stockList = stockDataRepository.findByStockNoAndSearchNoLessThanEqualOrderBySearchNoDesc(stockEventEntity, searchTime, PageRequest.of(0, 20));
        List<StockDataDto> stockDto = new ArrayList<>();
        for (StockDataEntity stockDetail : stockList) {
            StockDataDto stockDataDto = makeDtoData(stockDetail);
            stockDto.add(stockDataDto);
        }
        Collections.reverse(stockDto);
        return stockDto;
    }


    public StockAccountDto getDetailAccount(Integer stockNo, Integer userNo) {
        UserEntity user = userRepository.findByUserNo(userNo).get();
        StockEventEntity stockData = getStockType(stockNo);
        Optional<StockAccountEntity> stockAccountOpt = stockAccountRepository.findByUserNoAndStockNo(user, stockData);
        StockAccountDto stockAccountDto = new StockAccountDto();
        stockAccountDto.setPoint(userRepository.findByUserNo(userNo).get().getPoint());
        if (!stockAccountOpt.isPresent()) {
            stockAccountDto.setStockCount(0);
            stockAccountDto.setStockAverage(0);
        } else {
            StockAccountEntity stockAccount = stockAccountOpt.get();
            stockAccountDto.setStockCount(stockAccount.getStockCount());
            stockAccountDto.setStockAverage(stockAccount.getStockAverage());
        }
        return stockAccountDto;
    }

    public void setPoint(UserEntity user, Integer price) {
        PointTypeEntity pointType = pointTypeRepository.findByPointType("주식").get();
        pointService.makePointRecord(user, pointType, -price);
        pointService.changePointTable(user,price);
    }

    public void setBalance(UserEntity user,Integer price1, Integer price2, String type){
        BalanceSheetEntity sellerBalance = balanceSheetRepository.findByUserNo(user);
        sellerBalance.setPoint(user.getPoint());
        if (type == "판매") {
            sellerBalance.setStock(sellerBalance.getStock()-price1);
            sellerBalance.setStockIncome(sellerBalance.getStockIncome()+ price2);
        } else {
            sellerBalance.setStock(sellerBalance.getStock()+price1);
        }
        balanceSheetRepository.save(sellerBalance);
    }

    public void makeTradeRecord(UserEntity user, StockEventEntity stockNo, Integer count, Integer price) {
        StockTradeEntity stockTradeEntity = StockTradeEntity.builder()
                .stockNo(stockNo)
                .userNo(user)
                .tradeCount(count)
                .tradePrice(price)
                .tradeTime(BigInteger.valueOf(System.currentTimeMillis()))
                .build();
        stockTradeRepository.save(stockTradeEntity);
    }

    public void buyStock(StockTradeDto stockTradeDto, Integer userNo) {
        UserEntity user = userRepository.findByUserNo(userNo).get();
        Integer price = stockTradeDto.getCount() * stockTradeDto.getPrice();
        StockEventEntity stockData = getStockType(stockTradeDto.getStockNo());
        Optional<StockAccountEntity> stockAccountOpt = stockAccountRepository.findByUserNoAndStockNo(user, stockData);
        if (!stockAccountOpt.isPresent()) {
            StockAccountEntity newAccount= StockAccountEntity.builder()
                    .userNo(user)
                    .stockNo(getStockType(stockTradeDto.getStockNo()))
                    .stockCount(stockTradeDto.getCount())
                    .stockAverage(stockTradeDto.getPrice())
                    .build();
            stockAccountRepository.save(newAccount);
        } else {
            StockAccountEntity stockAccount = stockAccountOpt.get();
            Integer newAverage = (int) Math.floor(((stockAccount.getStockAverage() * stockAccount.getStockCount()) + price) / (stockAccount.getStockCount()+stockTradeDto.getCount()));
            stockAccount.setStockCount(stockAccount.getStockCount()+stockTradeDto.getCount());
            stockAccount.setStockAverage(newAverage);
            stockAccountRepository.save(stockAccount);
        }
        // 포인트 내역에 -로 추가, 총포인트에서 차감
        setPoint(user, price);

        //재무상태표 주식 추가
        setBalance(user, price, price, "구매");

        // 거래 내역 추가
        makeTradeRecord(user, stockData, stockTradeDto.getCount(), stockTradeDto.getPrice());
    }

    public void sellStock(StockTradeDto stockTradeDto, Integer userNo) {
        UserEntity user = userRepository.findByUserNo(userNo).get();
        StockEventEntity stockData = getStockType(stockTradeDto.getStockNo());
        StockAccountEntity stockAccount = stockAccountRepository.findByUserNoAndStockNo(user, stockData).get();
        Integer price = stockTradeDto.getCount() * stockTradeDto.getPrice();
        Integer netPrice = ((stockTradeDto.getPrice() - stockAccount.getStockAverage()) * stockTradeDto.getCount());
        Integer restPrice = stockTradeDto.getCount() * stockAccount.getStockAverage();
        if (stockAccount.getStockCount() - stockTradeDto.getCount() == 0) {
            stockAccount.setStockAverage(0);
        }
        stockAccount.setStockCount(stockAccount.getStockCount() - stockTradeDto.getCount());
        stockAccountRepository.save(stockAccount);
        // 포인트 내역에 +로 추가, 총포인트에 추가
        setPoint(user, -price);

        // 재무상태표 주식 차감 및 수익 계상
        setBalance(user,restPrice, netPrice, "판매");

        // 거래 내역 추가
        makeTradeRecord(user, stockData, stockTradeDto.getCount(), -stockTradeDto.getPrice());
    }

    public List<StockStatusDto> getMyAccount(Integer userNo) {
        if(userNo == null) return null;
        Optional<List<StockAccountEntity>> stockAccountEntityListOpt = stockAccountRepository.findByUserNo(userRepository.findByUserNo(userNo).get());
        List<StockStatusDto> stockStatusDto = new ArrayList<>();
        if (stockAccountEntityListOpt.isPresent()){
            List<StockAccountEntity> stockAccountEntityList = stockAccountEntityListOpt.get();
            for (StockAccountEntity tmpAccount : stockAccountEntityList) {
                StockStatusDto tmpDto = new StockStatusDto();
                tmpDto.setStockNo(tmpAccount.getStockNo().getStockNo());
                tmpDto.setStockName(tmpAccount.getStockNo().getStockName());
                tmpDto.setStockUnitPrice(tmpAccount.getStockAverage());
                Long nowTime = System.currentTimeMillis() / 1000;
                int searchTime = (int) Math.floor( (nowTime - startTime) / 60);
                if (searchTime % 2 != 0) {
                    searchTime = searchTime - 1;
                }
                tmpDto.setStockNowPrice(stockDataRepository.findByStockNoAndSearchNo(tmpAccount.getStockNo(), searchTime).getNowPrice());
                tmpDto.setStockCount(tmpAccount.getStockCount());
                stockStatusDto.add(tmpDto);
            }
        }
        return stockStatusDto;
    }

    public List<StockRankingDto> getRankerData(RankingDto rankingDto){
        List<StockRankingDto> rankerDto = new ArrayList<>();
        StockRankingDto tmpDto1 = new StockRankingDto();
        tmpDto1.setUserName(rankingDto.getNo1());
        tmpDto1.setImagePath(rankingDto.getNo1ImagePath());
        tmpDto1.setStockList(getMyAccount(rankingDto.getNo1No()));
        rankerDto.add(tmpDto1);
        StockRankingDto tmpDto2 = new StockRankingDto();
        tmpDto2.setUserName(rankingDto.getNo2());
        tmpDto2.setImagePath(rankingDto.getNo2ImagePath());
        tmpDto2.setStockList(getMyAccount(rankingDto.getNo2No()));
        rankerDto.add(tmpDto2);
        StockRankingDto tmpDto3 = new StockRankingDto();
        tmpDto3.setUserName(rankingDto.getNo3());
        tmpDto3.setImagePath(rankingDto.getNo3ImagePath());
        tmpDto3.setStockList(getMyAccount(rankingDto.getNo3No()));
        rankerDto.add(tmpDto3);
        return rankerDto;
    }
    public StockNewsDto changeNewsDto(StockNewsEntity stockNews) {
        StockNewsDto newsDto = new StockNewsDto();
        newsDto.setNewsNo(stockNews.getNewsNo());
        newsDto.setNewsTitle(stockNews.getNewsTitle());
        newsDto.setNewsContent(stockNews.getNewsContent());
        newsDto.setSearchNo(stockNews.getSearchNo());
        newsDto.setStockNo(stockNews.getStockNo().getStockNo());
        newsDto.setStockName(stockNews.getStockNo().getStockName());
        return newsDto;
    }

    public List<StockNewsDto> getAllNews() {
        Long nowTime = System.currentTimeMillis() / 1000;
        int searchTime = (int) Math.floor( (nowTime - startTime) / 60);
        List<StockNewsEntity> stockNewsList = stockNewsRepository.findLatestNewsByStockBelowSearchNo(searchTime);
        List<StockNewsDto> detailNews = new ArrayList<>();
        for ( StockNewsEntity eachNews : stockNewsList) {
            detailNews.add(changeNewsDto(eachNews));
        }
        return detailNews;
    }

    public List<StockNewsDto> getDetailNews(Integer stockNo) {
        Long nowTime = System.currentTimeMillis() / 1000;
        int searchTime = (int) Math.floor( (nowTime - startTime) / 60);
        List<StockNewsEntity> stockNewsList = stockNewsRepository.findByStockNoAndSearchNoLessThanEqualOrderBySearchNoDesc(getStockType(stockNo), searchTime, PageRequest.of(0, 15));
        List<StockNewsDto> allNews = new ArrayList<>();
        for ( StockNewsEntity eachNews : stockNewsList) {
            allNews.add(changeNewsDto(eachNews));
        }
        return allNews;
    }

    public List<StockTradeDetailDto> getTradeDetail(Integer stockNo) {
        List<StockTradeEntity> findTrade = stockTradeRepository.findTop10ByStockNoOrderByTradeNoDesc(stockEventRepository.findById(stockNo).get(), PageRequest.of(0, 10));
        List<StockTradeDetailDto> detailTrade = new ArrayList<>();
        for (StockTradeEntity eachTrade : findTrade) {
            StockTradeDetailDto tmpDto = new StockTradeDetailDto();
            tmpDto.setTradeTime(eachTrade.getTradeTime());
            if (eachTrade.getTradePrice() < 0) {
                tmpDto.setStockCount(-eachTrade.getTradeCount());
            } else {
                tmpDto.setStockCount(eachTrade.getTradeCount());
            }
            detailTrade.add(tmpDto);
        }
        return detailTrade;
    }
}
