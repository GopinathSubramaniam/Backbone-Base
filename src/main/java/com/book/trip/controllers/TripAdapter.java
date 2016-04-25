package com.book.trip.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book.trip.models.Trip;
import com.book.trip.repositories.TripRepository;

@RestController("/trip")
public class TripAdapter {

	
	private TripRepository tripRepository;
	
	@RequestMapping(value="/", method = RequestMethod.POST, produces = {"application/json"})
	public Trip create(@RequestBody Trip trip){
		return tripRepository.saveAndFlush(trip);
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT, produces = {"application/json"})
	public Trip update(@PathVariable Long id, @RequestBody Trip trip){
		Trip tripObj = tripRepository.findOne(id);
		return tripRepository.saveAndFlush(tripObj);
	}
	
	@RequestMapping("/getTrips")
	public List<Trip> getTripsByDate(@PathVariable Date date){
		return tripRepository.findAll();
	}
	
	
	
}
