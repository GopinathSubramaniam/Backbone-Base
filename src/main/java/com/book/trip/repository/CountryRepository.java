package com.book.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long>{

}
