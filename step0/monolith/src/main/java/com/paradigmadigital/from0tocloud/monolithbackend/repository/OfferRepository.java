package com.paradigmadigital.from0tocloud.monolithbackend.repository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paradigmadigital.from0tocloud.monolithbackend.model.Offer;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "offers", path = "offers")
public interface OfferRepository extends MongoRepository<Offer, String> {
}