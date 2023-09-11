package com.example.pium.service;

import com.example.pium.dto.AuctionDto;
import com.example.pium.dto.RGSAuctionDto;
import com.example.pium.entity.*;
import com.example.pium.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuctionServiceImp {
    private final ArtAuctionRepository artAuctionRepository;
    private final LikeArtRepository likeArtRepository;
    private final BidRecordRepository bidRecordRepository;
    private final PointTypeRepository pointTypeRepository;
    private final PointRecordRepository pointRecordRepository;
    private final UserRepository userRepository;
    private final BalanceSheetRepository balanceSheetRepository;

    public void post(ArtAuctionEntity artAuctionEntity){
        artAuctionRepository.save(artAuctionEntity);
    }

    public ArtAuctionEntity getAuctionInfo(Integer auctionNo) {
        ArtAuctionEntity auctionInfo = artAuctionRepository.findByAuctionNo(auctionNo).get();
        return auctionInfo;
    }

    public AuctionDto convertToAuctionDto(Integer auctionNo) {
        ArtAuctionEntity beforeDetail = artAuctionRepository.findByAuctionNo(auctionNo).get();
        AuctionDto dto = new AuctionDto();
        dto.setTitle(beforeDetail.getTitle());
        dto.setContent(beforeDetail.getContent());
        dto.setName(beforeDetail.getUser().getUserName());
        dto.setItemImagePath(beforeDetail.getImagePath());
        dto.setUserImagePath(beforeDetail.getUser().getImagePath());
        dto.setAuctionPrice(beforeDetail.getAuctionPrice());
        dto.setInstantPrice(beforeDetail.getInstantPrice());
        dto.setViewCount(beforeDetail.getViewCount());
        Integer likeCount = likeArtRepository.countByAuctionNo(beforeDetail);
        dto.setLikeCount(likeCount);
        dto.setCreatedTime(beforeDetail.getCreatedTime());
        if (beforeDetail.getWinner() != null) {
            dto.setWinner(beforeDetail.getWinner().getUserName());
        }
        return dto;
    }

    public List<AuctionDto> makeOnGoingList() {
        List<ArtAuctionEntity> allList = artAuctionRepository.findAll();
        List<AuctionDto> onGoingList = new ArrayList<>();

        for (ArtAuctionEntity eachList : allList) {
            if (eachList.getWinner() == null) {
                onGoingList.add(convertToAuctionDto(eachList.getAuctionNo()));
            }
        }
        return onGoingList;
    }

    public void makeRecord(UserEntity userEntity,ArtAuctionEntity artAuctionEntity, RGSAuctionDto rgsAuctionDto) {
        BidRecordEntity bidRecordEntity = BidRecordEntity.builder()
                .userNo(userEntity)
                .auctionNo(artAuctionEntity)
                .bidPrice(rgsAuctionDto.getAuctionPrice())
                .bidTime(BigInteger.valueOf(System.currentTimeMillis()))
                .build();
        bidRecordRepository.save(bidRecordEntity);
    }

    public void changePoint(UserEntity buyer, UserEntity seller, Integer price){
        PointTypeEntity pointType = pointTypeRepository.findByPointType("경매").get();
        // 입찰자의 포인트 감소
        PointRecordEntity buyerPointRecord = PointRecordEntity.builder()
                .userNo(buyer)
                .pointTypeNo(pointType)
                .pointChange(-price)
                .changedTime(BigInteger.valueOf(System.currentTimeMillis()))
                .build();
        pointRecordRepository.save(buyerPointRecord);
        buyer.setPoint(buyer.getPoint()-price);
        userRepository.save(buyer);
        // 판매자 포인트 증가
        PointRecordEntity sellerPointRecord = PointRecordEntity.builder()
                .userNo(seller)
                .pointTypeNo(pointType)
                .pointChange(price)
                .changedTime(BigInteger.valueOf(System.currentTimeMillis()))
                .build();
        pointRecordRepository.save(sellerPointRecord);
        seller.setPoint(seller.getPoint()+price);
        userRepository.save(seller);
        // 재무상태표에 반영
        BalanceSheetEntity sellerBalance = balanceSheetRepository.findByUserNo(seller).get();
        sellerBalance.setAuctionIncome(sellerBalance.getAuctionIncome()+price);
        balanceSheetRepository.save(sellerBalance);
    }
}
