package com.nuzones.nuzonesservice.modules.email.model;

import java.util.Map;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public record EmailRequest(
    String templateId,
    Map<String, String> dynamicTemplateData
) {}
