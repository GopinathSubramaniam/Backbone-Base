package com.book.trip.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.book.trip.enums.LoginState;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
@Entity
public class User extends BaseEntity{

	@Column(unique=true)
	private String name;
	private String password;

	@Column(unique=true)
	private String email;
	private String mobile;
	private String address;
	private String type;
	
	@Column(unique = true)
	private String token;
	
	private LoginState loginState;
	
	
}
