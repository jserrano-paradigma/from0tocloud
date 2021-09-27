package com.paradigmadigital.watto.service;

import java.util.List;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Service {
	@Id
	private String id;
	private String name;
	private String description;
	private List<ServiceItem> covers;
	private boolean enabled;
	
}
