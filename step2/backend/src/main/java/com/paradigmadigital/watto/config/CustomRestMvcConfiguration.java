package com.paradigmadigital.watto.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.paradigmadigital.watto.category.Category;
import com.paradigmadigital.watto.item.Item;
import com.paradigmadigital.watto.item.Photo;
import com.paradigmadigital.watto.offer.Offer;
import com.paradigmadigital.watto.order.Order;
import com.paradigmadigital.watto.order.OrderLine;
import com.paradigmadigital.watto.service.Service;
import com.paradigmadigital.watto.service.ServiceItem;
import com.paradigmadigital.watto.user.User;

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
				cors.addMapping("/**").allowedOrigins("*");
			}
		};
	}
}