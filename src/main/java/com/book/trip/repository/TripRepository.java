package com.book.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.model.Trip;

public interface TripRepository extends JpaRepository<Trip, Long>{

}
