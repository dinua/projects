package com.dinua.exemple;

import com.dinua.base.config.JpaModule;
import com.dinua.exemple.api.GreetingApi;
import com.dinua.exemple.business.ExampleService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.inject.Inject;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

@Configuration
public class ExampleConfig {

    @Inject
    JpaModule jpaModule;

    @Bean
    ExampleService exampleService() {
        return new ExampleService(jpaModule);
    }

    @Bean
    GreetingApi greetingApi() {
        return new GreetingApi(exampleService());
    }
}
