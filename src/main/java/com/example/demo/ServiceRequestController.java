package com.example.demo;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ServiceRequestController {
	private ServiceRequestRepository serviceRequestRepository;
	private ServiceRepository serviceRepository;
	private CityRepository cityRepository;
	
	public ServiceRequestController(ServiceRequestRepository serviceRequestRepository, ServiceRepository serviceRepository, CityRepository cityRepository) {
		this.serviceRequestRepository = serviceRequestRepository;
		this.serviceRepository = serviceRepository;
		this.cityRepository = cityRepository;
	}
    
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(path = "/service-request", produces = "application/json")
	public List<ServiceRequest> listAll(@RequestParam(required = false) String code) {
		if(code == null) {
			return (List<ServiceRequest>) serviceRequestRepository.findAll();
		}
		
		return serviceRequestRepository.findByCode(code);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path = "/service-request")
	public String save(@RequestBody ServiceRequest serviceRequest) {
		
		String generatedString = UUID.randomUUID().toString();  
	    serviceRequest.setCode(generatedString);
	    
	    Service service = serviceRequest.getService();
	    String serviceName = service.getName();
	    service = serviceRepository.findByName(serviceName);
	    serviceRequest.setService(service);
	    
	    
	    City city = serviceRequest.getCity();
	    String cityName = city.getName();
	    city = cityRepository.findByName(cityName);
	    serviceRequest.setCity(city);
		
		serviceRequestRepository.save(serviceRequest);

		return "{\"status\": \"success\", \"code\": 201}";
	}
}
