package com.example.caas;

import com.example.caas.controller.FrontEndResource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = FrontEndResource.class)
public class CaasApplication {

	public static void main(String[] args) {
		SpringApplication.run(CaasApplication.class, args);
	}

}
