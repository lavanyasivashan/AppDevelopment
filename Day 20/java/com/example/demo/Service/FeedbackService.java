package com.example.demo.Service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Feedback;
import com.example.demo.Repository.FeedbackRepository;

@Service
public class FeedbackService 
{
	@Autowired
	private FeedbackRepository feedbackRepo;

	public List<Feedback> getFeedback() 
	{
		return feedbackRepo.findAll();
	}

	public void saveFeedback(Feedback feedback) 
	{
		feedbackRepo.save(feedback);
	}

	public void updateFeedback(Feedback feedback) 
	{
		feedbackRepo.save(feedback);
	}

	public void deleteFeedback(int feedbackId) 
	{
	     feedbackRepo.deleteById(feedbackId);
	}
   
}