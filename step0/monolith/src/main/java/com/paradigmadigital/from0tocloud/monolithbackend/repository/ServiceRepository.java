package com.paradigmadigital.from0tocloud.monolithbackend.repository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paradigmadigital.from0tocloud.monolithbackend.model.Service;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "services", path = "services")
public interface ServiceRepository extends MongoRepository<Service, String> {
}