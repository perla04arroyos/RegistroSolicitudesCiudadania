package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class State {
	@Id
	@GeneratedValue
	private Long id;
	private String name;

	public State() {
		super();
	}
	
	public State(Long id, String name) {
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
