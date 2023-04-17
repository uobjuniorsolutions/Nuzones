package com.nuzones.nuzonesservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class NuzonesServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(NuzonesServiceApplication.class, args);
	}
}
