package com.rollinghay.customerservice.model;

import lombok.Builder;
import lombok.Data;
import lombok.Value;

@Data
@Value
@Builder
public class Customer {
    private String name;
    private Integer age;
    public Customer(String name, Integer age) {
        this.name = name;
        this.age = age;
    }
}
