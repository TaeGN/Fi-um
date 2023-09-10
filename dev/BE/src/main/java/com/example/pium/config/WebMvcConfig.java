package com.example.pium.config;

import com.example.pium.util.JwtTokenProvider;
import com.example.pium.util.TokenCheckInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {
    private final JwtTokenProvider jwtTokenProvider;



    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(new TokenCheckInterceptor(jwtTokenProvider)).excludePathPatterns("/user/login");
    }
}
