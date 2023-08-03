package com.reactjs_springboot3.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .exceptionHandling(
                (exp) -> exp
                    .authenticationEntryPoint((userAuthenticationEntryPoint))
            );
        http
            .addFilterBefore(
                new JwtAuthFilter(userAuthenticationProvider),
                BasicAuthenticationFilter.class
            );
        http
            .csrf(
                AbstractHttpConfigurer::disable
            );
        http
            .sessionManagement(
                (session) -> session
                    .sessionCreationPolicy(
                        SessionCreationPolicy.STATELESS
                    )
            );
        http
            .authorizeHttpRequests(
                (requests) -> requests
                    .requestMatchers(
                        HttpMethod.POST,
                        "/api/v1/auth/login",
                        "/api/v1/auth/register"
                    ).permitAll()
                    .anyRequest().authenticated());
        return http.build();
    }
}
