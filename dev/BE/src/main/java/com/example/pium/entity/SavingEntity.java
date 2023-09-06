package com.example.pium.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="SAVING")
@IdClass(SavingId.class)
public class SavingEntity {

    @Id
    @Column(name="saving_no")
    private int savingNo;

    @Id
    @ManyToOne
    @JoinColumn(name="user_no", referencedColumnName="user_no")
    private UserEntity user;

    @Column(name="saving_balance", nullable=false)
    private int savingBalance;

    @Column(name="create_saving", nullable=false)
    private long createSaving;

    @ManyToOne
    @JoinColumn(name="bank_no", referencedColumnName="bank_no")
    private BankProductDataEntity bank;

    @ManyToOne
    @JoinColumn(name="product_no", referencedColumnName="product_no")
    private BankProductDataEntity product;




}
