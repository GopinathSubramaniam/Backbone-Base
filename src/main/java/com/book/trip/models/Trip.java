package com.book.trip.models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity
public class Trip extends BaseEntity{

	private String startPoint;
	private String endPoint;
	private String description;
	private Double amount;
	private Double kilometer;
	private Double extraCharge;
	private String type;
	
	@ManyToOne
	private City city;
	
	@ManyToOne
	private State state;
	
	@ManyToOne
	private Country country;
	
}
