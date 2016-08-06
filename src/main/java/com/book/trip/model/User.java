package com.book.trip.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Setter
@Getter
@Entity
public class User extends BaseEntity{

	private String name;
	private String password;
	private String email;
	private String mobile;
	private String address;
	private String type;
	
}
