//package com.example.pium.util;
//
//import com.example.pium.dto.projection.DepositInterest;
//import com.example.pium.entity.BalanceSheetEntity;
//import com.example.pium.repository.BalanceSheetRepository;
//import com.example.pium.repository.DepositRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//import java.util.List;
//
//@Component
//@RequiredArgsConstructor
//public class Scheduler {
//
//    private final BalanceSheetRepository balanceSheetRepository;
//    private final DepositRepository depositRepository;
//
//    @Scheduled(cron ="0 0 0 * * *")
//    public void Deposit(){
//
//
//        List<BalanceSheetEntity> balanceSheetEntity = balanceSheetRepository.haveDeposit();
//        List<DepositInterest> depositInterest = depositRepository.findChildDeposit(System.currentTimeMillis()-(1000*60*60*24));
//        for(BalanceSheetEntity balanceSheet : balanceSheetEntity){
//            int userNo = balanceSheet.getUserNo().getUserNo();
//            // 24시간 안에 해당 아이가 예금을 든 경우
//            if(depositInterest.stream().anyMatch(result -> result.getUserNo().equals(userNo)){
//
//            }
//            // 24시간 이전에 예금을 든 경우는 balanceSheet 의 예금에 이자율 계산하여 포인트지급
//            else{
//
//            }
//        }
//        // 특정 userNo 가 존재하는지 안하는지 체크하는 람다식
//        depositRepository.findChildDeposit(System.currentTimeMillis()-(1000*60*60*24)).stream().anyMatch(result -> result.getUserNo().equals(3));
//        // 24 시간
//        for(DepositInterest d :depositRepository.findChildDeposit(System.currentTimeMillis()-(1000*60*60*24))){
//            System.out.println(d.getUserNo());
//            System.out.println(d.getDepositMoney());
//        }
//    }
//
//    @Scheduled(cron ="0 0 0 * * *")
//    public void Ranking(){
//
//    }
//}
