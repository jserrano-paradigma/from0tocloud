package com.paradigmadigital.watto.offer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "offers", path = "offers")
public interface OfferRepository extends MongoRepository<Offer, String> {
}