package com.book.trip.adapter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RoutingAdapter {

	
	@RequestMapping("/")
	public String home(){
		return "index";
	}
}
