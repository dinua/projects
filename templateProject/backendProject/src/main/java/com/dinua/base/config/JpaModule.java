package com.dinua.base.config;

import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by adrian.dinu on 10/23/2016.
 */

@Configuration
public class JpaModule {

    @PersistenceContext
    public EntityManager entityManager;

    @Autowired
    public JPAQuery jpaQuery;

    @Bean
    JPAQuery jpaQuery() {
        return new JPAQuery(entityManager);
    }
}
