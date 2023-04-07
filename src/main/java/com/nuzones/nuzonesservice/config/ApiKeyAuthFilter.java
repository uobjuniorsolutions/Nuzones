package com.nuzones.nuzonesservice.config;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;

/**
 * @author Emmanuel Abajo
 * @created 07/04/2023
 */
@RequiredArgsConstructor
public class ApiKeyAuthFilter extends AbstractPreAuthenticatedProcessingFilter {

    private final String headerName;

    @Override
    protected Object getPreAuthenticatedPrincipal(HttpServletRequest request) {
        return request.getHeader(headerName);
    }

    @Override
    protected Object getPreAuthenticatedCredentials(HttpServletRequest request) {
        return null;
    }
}
