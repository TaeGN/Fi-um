package com.example.pium.service;

import com.example.pium.dto.ProductRequest;
import org.springframework.beans.factory.annotation.Autowired;


public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(ProductRequest request) {
        Product product = new Product();
        product.setName(request.getName());
        product.setUnit_price(request.getUnit_price());
        product.setCount(request.getCount());
        product.setDescription(request.getDescription());
        product.setImage_path(request.getImage_path());

        return productRepository.save(product);
    }
}