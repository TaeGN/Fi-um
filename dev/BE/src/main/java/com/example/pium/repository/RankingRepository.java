package com.example.pium.repository;

import com.example.pium.entity.RankingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RankingRepository extends JpaRepository<RankingEntity, Integer> {
    List<RankingEntity> findAll();
    RankingEntity findByRankingType(String rankingType);

    // 주식 수익 기준으로 상위 3명 , 동점자가 있는 경우 동점자 포함하여 반환환
   @Query(value = "SELECT ranked.user_no, ranked.stock\n" +
            "FROM (\n" +
            "    SELECT *,\n" +
            "           DENSE_RANK() OVER (ORDER BY stock DESC) AS ranking\n" +
            "    FROM balance_sheet\n" +
            ") ranked\n" +
            "WHERE ranking <= 3", nativeQuery = true)
    List<?> getStockRanking();
}
