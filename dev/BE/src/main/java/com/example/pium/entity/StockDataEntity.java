package com.example.pium.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Builder
@Entity
@DynamicInsert
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Data
@Table(name="stock_data")
public class StockDataEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "data_no")
    private Integer dataNo;

    @NotNull(message = "stockNo must not be null")
    @ManyToOne
    @JoinColumn(name = "stock_no")
    private StockEventEntity stockNo;

    @NotNull(message = "nowPrice must not be null")
    @Column(name = "now_price")
    private Integer nowPrice;

    @NotNull(message = "fluctuationPrice must not be null")
    @Column(name = "fluctuation_price")
    private Integer fluctuationPrice;

    @NotNull
    @Column(name="search_no")
    private Integer searchNo;
}
