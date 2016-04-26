package com.book.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.model.State;

public interface StateRepository extends JpaRepository<State, Long>{

}
