package com.book.trip.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity
public class State {
	
	@Id
	private Long id;
	private String name;
	
	@OneToOne
	private Country country;
	
}
