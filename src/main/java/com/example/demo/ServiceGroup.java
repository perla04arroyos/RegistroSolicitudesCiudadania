package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity(name="service_group")
public class ServiceGroup {
	@Id
	@GeneratedValue
	private Long id;
	private String name;

	public ServiceGroup() {
		super();
	}
	
	public ServiceGroup(Long id, String name) {
		super();
		this.id = id;
		this.setName(name);
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
