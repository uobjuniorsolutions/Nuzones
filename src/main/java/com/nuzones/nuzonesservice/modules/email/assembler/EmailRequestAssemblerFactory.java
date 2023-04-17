package com.nuzones.nuzonesservice.modules.email.assembler;

import com.nuzones.nuzonesservice.modules.email.assembler.impl.AmbassadorSignUpEmailAssembler;
import com.nuzones.nuzonesservice.modules.email.assembler.impl.ContactUsEmailAssembler;
import com.nuzones.nuzonesservice.modules.email.enums.EmailType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
@Component
@RequiredArgsConstructor
public class EmailRequestAssemblerFactory {

    private final AmbassadorSignUpEmailAssembler ambassadorSignUpEmailAssembler;

    public EmailRequestAssembler getAssembler(EmailType type) {
        switch (type) {
            case ambassador_sign_up -> {
                return ambassadorSignUpEmailAssembler;
            }
            case contact_us -> {
                return new ContactUsEmailAssembler();
            }
            default -> {
                return null;
            }
        }
    }
}
