package com.paradigmadigital.from0tocloud.monolithbackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paradigmadigital.from0tocloud.monolithbackend.model.Item;

@RepositoryRestResource(collectionResourceRel = "items", path = "items")
public interface ItemRepository extends MongoRepository<Item, String> {
	List<Item> findByName(@Param("name") String name);
    List<Item> findByStatus(@Param("status") String status);
}