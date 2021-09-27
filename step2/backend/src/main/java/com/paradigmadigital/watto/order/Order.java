package com.paradigmadigital.watto.order;

import java.util.List;

import org.springframework.data.annotation.Id;

import com.paradigmadigital.watto.offer.Offer;
import com.paradigmadigital.watto.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {

	@Id
	private String id;
    private List<OrderLine> orderLines;
	private Offer offerApplied;
	private long shipDate;
	private OrderStatus orderStatus;
	private boolean complete;
	private User user;
	
}
