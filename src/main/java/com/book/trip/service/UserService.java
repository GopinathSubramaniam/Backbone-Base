package com.book.trip.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.trip.enums.LoginState;
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
		System.out.println("User ::: "+user);
		if(user != null){
			String uuid = UUID.randomUUID().toString();
			user = userRepository.findByNameOrEmailAndPassword(user.getEmail(), user.getEmail(), user.getPassword());
			if(uuid != null && user!= null){
				System.out.println("Uuid ::: "+uuid);
				user.setToken(uuid);
				user.setLoginState(LoginState.ONLINE);
				userRepository.saveAndFlush(user);
				status = AppConstant.getStatus(AppConstant.STATUS_OK, AppConstant.STATUS_CODE_200, AppConstant.SUCCESS_GET, user);
			}else{
				status = AppConstant.getStatus(AppConstant.STATUS_FAIL, AppConstant.STATUS_CODE_500, AppConstant.FAIL_GET, null);
			}
		}else{
			status = AppConstant.getStatus(AppConstant.STATUS_FAIL, AppConstant.STATUS_CODE_500, AppConstant.FAIL_GET, null);
		}
		return status;
	}
	
	public Status logout(String token){
		User user = userRepository.findByToken(token);
		user.setLoginState(LoginState.OFFLINE);
		userRepository.saveAndFlush(user);
		status = AppConstant.getStatus(AppConstant.STATUS_OK, AppConstant.STATUS_CODE_200, AppConstant.SUCCESS_UPDATE, null);
		return status;
	}
	
	public Status getAll(){
		List<User> users = userRepository.findAll();
		status = AppConstant.getStatus(AppConstant.STATUS_OK, AppConstant.STATUS_CODE_200, AppConstant.SUCCESS_INSERT, users);
		return status;
	}
	
	
}
