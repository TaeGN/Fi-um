package com.example.pium.repository;

import com.example.pium.entity.ItemListEntity
        ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SponserShipRepository extends JpaRepository<ItemListEntity, Integer> {


}
