package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BillingStatus {
 @Id
 @GeneratedValue(strategy = GenerationType
 .IDENTITY)
 private Long id;
 private String username;
 private String mobileno;
 private int voteCount;

 // Constructors, getters, and setters
}
