package com.book.trip.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.trip.models.City;
import com.book.trip.models.Country;
import com.book.trip.models.State;
import com.book.trip.repositories.CityRepository;
import com.book.trip.repositories.CountryRepository;
import com.book.trip.repositories.StateRepository;

@RestController("/app")
public class AppAdapter {

	@Autowired
	private CountryRepository countryRepository;
	
	@Autowired
	private StateRepository stateRepository;
	
	@Autowired
	private CityRepository cityRepository;
	
	
	@RequestMapping("/getCountries")
	public List<Country> getCountries(){
		return countryRepository.findAll();
	}
	
	@RequestMapping("/getStates")
	public List<State> getStates(){
		return stateRepository.findAll();
	}
	
	@RequestMapping("/getCities")
	public List<City> getCities(){
		return cityRepository.findAll();
	}
	
}
