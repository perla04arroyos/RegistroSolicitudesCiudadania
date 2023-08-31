package com.example.demo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;


@Entity(name="service")
public class Service {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id", referencedColumnName = "id")
	private ServiceGroup group;
	
	public Service() {
		super();
	}
	
	public Service(Long id, String name, String description, ServiceGroup group) {
		super();
		this.id = id;
		this.setName(name);
		this.setDescription(description);
		this.setGroup(group);
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ServiceGroup getGroup() {
		return group;
	}

	public void setGroup(ServiceGroup group) {
		this.group = group;
	}
	
	
	@Override
	public String toString() {
		return String.format("Service [id=%s, name=%s]", id, name);
	}
}
