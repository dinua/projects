package com.dinua.exemple.api;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Component
@Path("/hello")
public class GreetingApi {

    @GET
    @Produces("application/json")
    public String greeting() {
        return "Hello User";
    }
}