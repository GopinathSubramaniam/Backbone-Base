package com.book.trip.models;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
public class FromToPlace {

	@Id
	private Long id;
	
	private String from;
	private String to;
	
}
