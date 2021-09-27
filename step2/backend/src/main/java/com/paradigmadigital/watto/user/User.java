package com.paradigmadigital.watto.user;

import java.util.List;

import org.springframework.data.annotation.Id;

import com.paradigmadigital.watto.order.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	private String id;
	private String firstName;
	private String lastName;
	private String email;
	private String username;
	private String password;
	private String phone;
	private String userStatus;
	private List<Order> orders;
}