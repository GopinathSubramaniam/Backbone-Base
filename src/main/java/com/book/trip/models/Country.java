package com.book.trip.models;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Entity
public class Country {
	
	@Id
	private Long id;
	private String name;
	
}
