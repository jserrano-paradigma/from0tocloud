package com.paradigmadigital.watto.offer;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Offer {
	@Id
	private String id;
	private String name;
	private String description;
	private String code;
	private int discount;
	private long validUntil;
	private boolean enabled;
}
