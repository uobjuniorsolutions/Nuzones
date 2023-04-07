package com.nuzones.nuzonesservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Objects;

/**
 * @author Emmanuel Abajo
 * @created 06/04/2023
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${app.http.api-key}")
    private String principalRequestValue;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        ApiKeyAuthFilter filter = new ApiKeyAuthFilter("x-api-key");
        filter.setAuthenticationManager(
                authentication -> {
                    String principal = (String) authentication.getPrincipal();
                    if (!Objects.equals(principalRequestValue, principal)) {
                        throw new BadCredentialsException(
                                "The API key was not found or not the expected value.");
                    }
                    authentication.setAuthenticated(true);
                    return authentication;
                });

        return http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(HttpMethod.DELETE, "/api/v1/zones/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/api/v1/zones/**").authenticated()
                        .anyRequest().permitAll()
                )
                .headers(headers -> headers.frameOptions().sameOrigin())
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(filter)
                .build();
    }
}
