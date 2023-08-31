package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ServiceController {
	
	private ServiceRepository serviceRepository;
	
	public ServiceController(ServiceRepository serviceRepository) {
		this.serviceRepository = serviceRepository;
	}
    
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "/services", produces = "application/json")
	public List<Service> listAll() {
		return (List<Service>) serviceRepository.findAll();
	}
}
