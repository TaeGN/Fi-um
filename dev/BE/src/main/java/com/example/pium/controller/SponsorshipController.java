package com.example.pium.controller;

import com.example.pium.dto.ItemListDto;
import com.example.pium.dto.MoneyDto;
import com.example.pium.service.SponserShipServiceImp;
import com.example.pium.service.UserServiceImp;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/sponsorship")
@RestController
@Slf4j
public class SponsorshipController {
    private final SponserShipServiceImp sponserShipService;
    private final UserServiceImp userService;

    @GetMapping
    public ResponseEntity<List<ItemListDto>> getAllItemList() {
        List<ItemListDto> allItemList = sponserShipService.getAllList();
        return new ResponseEntity<>(allItemList, HttpStatus.OK);
    }

    @PostMapping("support")
    public ResponseEntity<Map<String, String>> postSupport(HttpServletRequest request, @RequestParam Integer itemNo, @RequestBody MoneyDto supportPrice) {
        Integer postUser = (Integer) request.getAttribute("userNo");
        Boolean checkPrice = sponserShipService.checkPrice(itemNo, supportPrice.getMoney());
        Map<String, String> returnMsg = new HashMap<>();
        if (checkPrice) {
            if (userService.checkValidCash(postUser, supportPrice.getMoney())){
                sponserShipService.postSupport(postUser, itemNo, supportPrice.getMoney());
                returnMsg.put("msg","정상적으로 후원하였습니다.");
                return new ResponseEntity<>(returnMsg, HttpStatus.OK);
            } else {
                returnMsg.put("msg","보유 캐시가 부족합니다.");
                return new ResponseEntity<>(returnMsg, HttpStatus.FAILED_DEPENDENCY);
            }
        } else {
            returnMsg.put("msg","후원가능금액보다 더 많이 후원시도하였습니다.");
            return new ResponseEntity<>(returnMsg, HttpStatus.NOT_ACCEPTABLE);
        }
    }






}
