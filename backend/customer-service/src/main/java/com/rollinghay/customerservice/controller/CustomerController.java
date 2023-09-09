package com.rollinghay.customerservice.controller;


import com.rollinghay.customerservice.model.Customer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class CustomerController {
    @GetMapping
    public Customer getCustomer() {
        Customer cusotmer = new Customer("Sam Ling",23);
        return cusotmer;
    }
}
