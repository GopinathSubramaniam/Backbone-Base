package com.book.trip.adapter;

import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book.trip.model.Trip;
import com.book.trip.repository.TripRepository;

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
