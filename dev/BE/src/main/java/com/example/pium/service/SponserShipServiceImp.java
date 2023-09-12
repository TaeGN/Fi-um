package com.example.pium.service;

import com.example.pium.dto.ItemListDto;
import com.example.pium.entity.ItemListEntity;
import com.example.pium.entity.PointTypeEntity;
import com.example.pium.entity.SponsorFundingHistoryEntity;
import com.example.pium.entity.UserEntity;
import com.example.pium.repository.ItemListRepository;
import com.example.pium.repository.PointTypeRepository;
import com.example.pium.repository.SponsorFundingHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class SponserShipServiceImp {
    private final ItemListRepository itemListRepository;
    private final SponsorFundingHistoryRepository sponsorFundingHistoryRepository;
    private final UserServiceImp userService;
    private final PointServiceImp pointService;
    private final PointTypeRepository pointTypeRepository;

    public SponsorFundingHistoryEntity findTopFunderForItem(ItemListEntity item) {
        List<SponsorFundingHistoryEntity> funders = sponsorFundingHistoryRepository.findTopFunderByItem(item, PageRequest.of(0, 1));
        return funders.isEmpty() ? null : funders.get(0);
    }

    public List<ItemListDto> getAllList() {
        List<ItemListDto> allItemDto = new ArrayList<>();
        List<ItemListEntity> allItemEntity = itemListRepository.findAllDesc();
        for (ItemListEntity eachEntity : allItemEntity) {
            ItemListDto tmpDto = new ItemListDto();
            tmpDto.setItemNo(eachEntity.getItemNo());
            tmpDto.setItemName(eachEntity.getItemName());
            tmpDto.setUnitPrice(eachEntity.getItemUnitPrice());
            tmpDto.setItemCount(eachEntity.getItemCount());
            tmpDto.setDescription(eachEntity.getItemDescription());
            tmpDto.setImagePath(eachEntity.getItemImagePath());
            tmpDto.setSponsorshipAmount(eachEntity.getSponsorshipAmount());
            tmpDto.setFundingAmount(eachEntity.getFundingAmount());
            tmpDto.setIsCompleted(eachEntity.getIsCompleted());
            tmpDto.setBestFunding(findTopFunderForItem(eachEntity).getUserNo().getUserName());
            allItemDto.add(tmpDto);
        }
        return allItemDto;
    }

    public Boolean checkPrice(Integer itemNo, Integer money) {
        ItemListEntity checkItem = itemListRepository.findByItemNo(itemNo);
        int itemPrice = checkItem.getItemUnitPrice() * checkItem.getItemCount();
        if (itemPrice >= checkItem.getSponsorshipAmount() + money) {
            return true;
        } else {
            return false;
        }
    }

    public void postSupport(Integer user, Integer itemNo, Integer money) {
        UserEntity userData = userService.getUserInfo(user);
        // 펀딩/후원 기록에 추가
        SponsorFundingHistoryEntity newSponsor = SponsorFundingHistoryEntity.builder()
                .price(-money)
                .userNo(userData)
                .itemNo(itemListRepository.findByItemNo(itemNo))
                .build();
        sponsorFundingHistoryRepository.save(newSponsor);

        // 포인트 추가 및 캐시 감소
        pointService.changeCashTable(userData, money);

        // 포인트 내역(캐시 소모)
        PointTypeEntity pointTypeCash = pointTypeRepository.findByPointType("캐시").get();
        pointService.makePointRecord(userData, pointTypeCash, -money);

        // 포인트 내역(포인트 획득)
        PointTypeEntity pointTypePoint = pointTypeRepository.findByPointType("후원").get();
        pointService.makePointRecord(userData, pointTypePoint, money);
    }

}