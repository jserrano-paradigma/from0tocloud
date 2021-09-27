package com.paradigmadigital.from0tocloud.monolithbackend.repository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paradigmadigital.from0tocloud.monolithbackend.model.Order;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "orders", path = "orders")
public interface OrderRepository extends MongoRepository<Order, String> {
}