package com.book.trip.models;

import java.util.Date;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@MappedSuperclass
public class BaseEntity {

	@Id
	private Long id;
	private Date createDate;
	private Date changedDate;
	private String createdBy;
	private String changedBy;
	
	
	@PreUpdate
	public void update(){
		this.changedDate = new Date();
	}
	
	@PrePersist
	public void create(){
		this.createDate = new Date();
		this.changedDate = new Date();
	}
	
}
