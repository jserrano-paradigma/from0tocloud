package com.paradigmadigital.from0tocloud.monolithbackend.repository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.paradigmadigital.from0tocloud.monolithbackend.model.User;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends MongoRepository<User, String> {
	User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}