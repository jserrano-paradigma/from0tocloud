package com.paradigmadigital.from0tocloud.monolithbackend.api;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

	@RequestMapping(value="/watto/item", method = RequestMethod.GET)
	public List<Object> getItems(){
		return Collections.emptyList();
	}
}
