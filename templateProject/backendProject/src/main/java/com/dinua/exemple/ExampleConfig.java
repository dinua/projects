package com.dinua.exemple;

import com.dinua.exemple.api.GreetingApi;
import com.dinua.exemple.business.ExampleService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

@Configuration
public class ExampleConfig {

    @Bean
    ExampleService exampleService() {
        return new ExampleService();
    }

    @Bean
    GreetingApi greetingApi() {
        return new GreetingApi(exampleService());
    }
}
