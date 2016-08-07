package com.book.trip.adapter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book.trip.model.City;
import com.book.trip.model.Country;
import com.book.trip.model.State;
import com.book.trip.model.Status;
import com.book.trip.model.User;
import com.book.trip.repository.CityRepository;
import com.book.trip.repository.CountryRepository;
import com.book.trip.repository.StateRepository;
import com.book.trip.service.UserService;

@RestController
@RequestMapping("/app")
public class AppAdapter {

	@Autowired
	private CountryRepository countryRepository;
	
	@Autowired
	private StateRepository stateRepository;
	
	@Autowired
	private CityRepository cityRepository;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/login", method = RequestMethod.POST, produces={"application/json"})
	public Status login(@RequestBody User user){
		 Status status = userService.getByUserNameOrEmailAndPassword(user);
		 return status;
	}
	
	@RequestMapping(value="/logout/{token}", method = RequestMethod.GET, produces={"application/json"})
	public Status logout(@PathVariable String token){
		 Status status = userService.logout(token);
		 return status;
	}
	
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
