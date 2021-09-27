package com.paradigmadigital.from0tocloud.monolithbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.paradigmadigital.from0tocloud.monolithbackend.model.Category;
import com.paradigmadigital.from0tocloud.monolithbackend.model.Item;
import com.paradigmadigital.from0tocloud.monolithbackend.model.Offer;
import com.paradigmadigital.from0tocloud.monolithbackend.model.Order;
import com.paradigmadigital.from0tocloud.monolithbackend.model.OrderLine;
import com.paradigmadigital.from0tocloud.monolithbackend.model.Photo;
import com.paradigmadigital.from0tocloud.monolithbackend.model.Service;
import com.paradigmadigital.from0tocloud.monolithbackend.model.ServiceItem;
import com.paradigmadigital.from0tocloud.monolithbackend.model.User;

@Configuration
class CustomRestMvcConfiguration {

	@Bean
	public RepositoryRestConfigurer repositoryRestConfigurer() {

		return new RepositoryRestConfigurer() {

			@Override
			public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
				config.setBasePath("/api");
				config.exposeIdsFor(Item.class, Category.class, Order.class, Offer.class, OrderLine.class, Photo.class,
						Service.class, ServiceItem.class, User.class);
			}
		};
	}
}