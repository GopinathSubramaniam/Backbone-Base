package com.book.trip.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.models.State;

public interface StateRepository extends JpaRepository<State, Long>{

}
