package com.dinua.exemple.api;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

import com.dinua.exemple.business.ExampleService;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Component
@Path("/hello")
public class GreetingApi {

    private final ExampleService exampleService;

    public GreetingApi(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @GET
    @Produces("application/json")
    public String greeting() {
        return exampleService.getText();
    }
}