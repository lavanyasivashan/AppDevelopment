package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Video;



public interface VideoRepository extends JpaRepository<Video, Integer> {

}