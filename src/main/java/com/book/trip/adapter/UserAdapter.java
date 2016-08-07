package com.book.trip.adapter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book.trip.model.Status;
import com.book.trip.model.User;
import com.book.trip.service.UserService;

@RestController
@RequestMapping("/user")
public class UserAdapter {

	@Autowired
	private UserService userService;
	
	
	@RequestMapping(value="/", method = RequestMethod.POST, produces={"application/json"})
	public Status save(@RequestBody User user){
		Status status = userService.save(user);
		return status;
	}
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public Status getAll(){
		 Status status = userService.getAll();
		 return status;
	}
	
	
}
