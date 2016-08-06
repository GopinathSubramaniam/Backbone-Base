package com.book.trip.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.trip.model.User;
import com.book.trip.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public User save(User user){
		return userRepository.saveAndFlush(user);
	}
	
	
}
