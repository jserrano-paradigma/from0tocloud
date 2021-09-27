package com.paradigmadigital.watto.order;

import org.springframework.data.annotation.Id;

import com.paradigmadigital.watto.item.Item;

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
