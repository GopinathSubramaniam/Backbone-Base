package com.book.trip.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.trip.model.Status;
import com.book.trip.model.User;
import com.book.trip.repository.UserRepository;
import com.book.trip.util.AppConstant;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	private static Status status = new Status();
	
	public Status save(User user){
		if(user != null){
			user = userRepository.saveAndFlush(user);
			status = AppConstant.getStatus(AppConstant.STATUS_OK, AppConstant.STATUS_CODE_200, AppConstant.SUCCESS_INSERT, user);
		}else{
			status = AppConstant.getStatus(AppConstant.STATUS_FAIL, AppConstant.STATUS_CODE_500, AppConstant.FAIL_INSERT, null);
		}
		return status;
	}
	
	public Status getByUserNameOrEmailAndPassword(User user){
		System.out.println("Before GetByUserNameOrEmailAndPassword ::: "+user);
		if(user != null){
			user = userRepository.findByNameOrEmailAndPassword(user.getEmail(), user.getEmail(), user.getPassword());
			System.out.println("After GetByUserNameOrEmailAndPassword ::: "+user);
			status = AppConstant.getStatus(AppConstant.STATUS_OK, AppConstant.STATUS_CODE_200, AppConstant.SUCCESS_GET, user);
		}else{
			status = AppConstant.getStatus(AppConstant.STATUS_FAIL, AppConstant.STATUS_CODE_500, AppConstant.FAIL_GET, null);
		}
		return status;
	}
	
	
}
