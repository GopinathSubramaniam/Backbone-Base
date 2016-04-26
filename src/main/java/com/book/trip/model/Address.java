package com.book.trip.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity
public class Address extends BaseEntity{

	private String address1;
	private String address2;
	private String address3;
	private String city;
	
	@ManyToOne
	private User user;
	
}
