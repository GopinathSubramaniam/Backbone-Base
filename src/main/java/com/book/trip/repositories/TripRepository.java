package com.book.trip.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.models.Trip;

public interface TripRepository extends JpaRepository<Trip, Long>{

}
