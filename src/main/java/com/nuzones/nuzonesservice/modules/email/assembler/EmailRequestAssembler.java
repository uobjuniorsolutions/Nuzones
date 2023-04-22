package com.nuzones.nuzonesservice.modules.email.assembler;

import com.nuzones.nuzonesservice.modules.email.model.EmailRequest;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public interface EmailRequestAssembler {
    EmailRequest assemble(Object body);
}
