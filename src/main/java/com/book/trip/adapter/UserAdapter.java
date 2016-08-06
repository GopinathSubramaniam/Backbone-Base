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
		Status status = new Status();
		System.out.println("User ::: "+user);
		if(user != null){
			status.setStatus("OK");
			status.setStatusCode(200);
			status.setStatusMsg("Inserted Successfully");
			user = userService.save(user);
			status.setObj(user);
		}else{
			status.setStatus("FAILED");
			status.setStatusCode(500);
			status.setStatusMsg("Error while inserting record");
		}
		return status;
	}
	
}
