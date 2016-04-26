package com.book.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.model.City;

public interface CityRepository extends JpaRepository<City, Long>{

}
