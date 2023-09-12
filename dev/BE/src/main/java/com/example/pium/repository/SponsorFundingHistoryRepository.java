package com.example.pium.repository;

import com.example.pium.entity.ItemListEntity;
import com.example.pium.entity.SponsorFundingHistoryEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SponsorFundingHistoryRepository extends JpaRepository<SponsorFundingHistoryEntity, Integer> {

    @Query("SELECT s.userNo FROM SponsorFundingHistoryEntity s WHERE s.itemNo = :item GROUP BY s.userNo ORDER BY SUM(s.price) DESC")
    List<SponsorFundingHistoryEntity> findTopFunderByItem(@Param("item") ItemListEntity item, Pageable pageable);
}

