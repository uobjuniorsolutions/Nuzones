package com.nuzones.nuzonesservice.exception;

/**
 * @author Emmanuel Abajo
 * @created 17/04/2023
 */
public class ServerErrorException extends RuntimeException {

    public ServerErrorException(){
        super("An error occurred while processing request");
    }

    public ServerErrorException(String message){
        super(message);
    }
}
