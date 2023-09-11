package com.example.pium.repository;

import com.example.pium.entity.RefreshTokenEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRedisRepository extends CrudRepository<RefreshTokenEntity, Integer> {

    RefreshTokenEntity findByRefreshToken(String refreshToken);
}
