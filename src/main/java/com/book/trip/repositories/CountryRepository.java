package com.book.trip.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.models.Country;

public interface CountryRepository extends JpaRepository<Country, Long>{

}
