package com.dinua.base.config;

import com.dinua.exemple.api.GreetingApi;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(MultiPartFeature.class);
        register(GreetingApi.class);
    }
}
