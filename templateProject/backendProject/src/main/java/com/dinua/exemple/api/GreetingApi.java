package com.dinua.exemple.api;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

import com.dinua.exemple.business.ExampleService;
import com.dinua.exemple.dtos.User;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.List;

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

        List<User> users = exampleService.findAll();
        StringBuilder stringBuilder = new StringBuilder();
        for (User user : users) {
            stringBuilder.append(user.toString()).append("  ||  ");
        }

        return exampleService.getText() + stringBuilder.toString();
    }
}