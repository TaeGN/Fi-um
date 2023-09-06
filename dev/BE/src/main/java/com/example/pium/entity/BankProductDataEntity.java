package com.example.pium.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
@Entity
@Builder
@DynamicInsert
@Table(name = "bank_product_data")
public class BankProductDataEntity {

    @Id
    @ManyToOne
    @JoinColumn(name="bank_no", referencedColumnName="bank_no")
    private BankListEntity bank;

    @Id
    @ManyToOne
    @JoinColumn(name="product_no", referencedColumnName="product_no")
    private ProductTypeEntity product;

    @Column(name="interest_rate", nullable=false)
    private int interestRate;

    @Column(name="prime_interest_rate")
    private Integer primeInterestRate;

    @Column(name="prime_condition")
    private String primeCondition;

    // Getters, Setters, Constructors, equals, hashCode
    // ... (as per your requirements)
}

