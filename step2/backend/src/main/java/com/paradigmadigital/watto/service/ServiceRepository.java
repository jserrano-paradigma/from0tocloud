package com.paradigmadigital.watto.service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "services", path = "services")
public interface ServiceRepository extends MongoRepository<Service, String> {
}