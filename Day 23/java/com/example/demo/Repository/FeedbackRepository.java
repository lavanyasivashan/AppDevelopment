package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Feedback;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> 
{
}