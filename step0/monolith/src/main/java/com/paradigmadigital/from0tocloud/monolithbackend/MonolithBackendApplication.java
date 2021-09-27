package com.paradigmadigital.from0tocloud.monolithbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MonolithBackendApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(MonolithBackendApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(MonolithBackendApplication.class, args);
	}

}
