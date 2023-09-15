package com.example.pium.repository;

import com.example.pium.dto.projection.DepositInterest;
import com.example.pium.entity.DepositEntity;
import com.example.pium.entity.UserEntity;
import io.swagger.models.auth.In;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;
import java.util.Map;

@Repository
public interface DepositRepository extends JpaRepository<DepositEntity, Integer> {

    List<DepositEntity> findAllByUserNo(UserEntity user);

    @Query(value = "select a.interest_rate as interestRate, a. prime_interest_rate as primeInterestRate, b.userNo as userNo, b.depositMoney as depositMoney from bank_product_data as a, (SELECT d.user_no as userNo, SUM(d.deposit_money) as depositMoney, MAX(d.bank_product_data_no) as bankProductDataNo FROM deposit as d where d.create_deposit > :nowTime group by user_no) as b where a.bank_product_data_no = b.bankProductDataNo ",nativeQuery = true)
    List<DepositInterest> findChildDeposit(Long nowTime);

}
