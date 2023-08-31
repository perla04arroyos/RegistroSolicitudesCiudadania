package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CityController {
	
	private CityRepository cityRepository;
	
	public CityController(CityRepository cityRepository) {
		this.cityRepository = cityRepository;
	}
    
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "/cities", produces = "application/json")
	public List<City> listAll() {
		return (List<City>) cityRepository.findAll();
	}
}
