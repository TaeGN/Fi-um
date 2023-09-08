package com.example.pium.repository;

import com.example.pium.entity.ItemListEntity
        ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface SponserShipRepository extends JpaRepository<ItemListEntity, Integer> {
    Optional<ItemListEntity> findById(Integer id);

}
