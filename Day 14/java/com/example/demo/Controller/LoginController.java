package com.example.demo.Controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Model.Login;
import com.example.demo.Service.LoginService;




public 	class LoginController {
	@Autowired
	private LoginService ls;
	@GetMapping("/getuser")
  public List<Login>getLoginDetails1()
  {
  	return ls.getUser();
  }
	
  @PostMapping("/postuser")
  public String saveDetails(@RequestBody Login le)
  {
  	us.saveUser(le);
 	return "Successfully saved";
}

}