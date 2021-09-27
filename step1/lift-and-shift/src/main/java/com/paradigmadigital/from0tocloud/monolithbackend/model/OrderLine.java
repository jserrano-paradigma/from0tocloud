package com.paradigmadigital.from0tocloud.monolithbackend.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderLine {

	@Id
	private String id;
    private Item item;
	private int quantity;
	private Order order;

}
