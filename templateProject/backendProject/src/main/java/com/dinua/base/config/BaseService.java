package com.dinua.base.config;

import com.querydsl.core.types.EntityPath;
import com.querydsl.core.types.Expression;
import com.querydsl.jpa.impl.JPAQuery;

import javax.persistence.EntityManager;

/**
 * Created by adrian.dinu on 10/23/2016.
 */
public class BaseService {

    protected EntityManager entityManager;

    protected JPAQuery jpaQuery;

    public BaseService(EntityManager entityManager, JPAQuery jpaQuery) {
        this.entityManager = entityManager;
        this.jpaQuery = jpaQuery;
    }

    public BaseService(JpaModule jpaModule) {
        this.entityManager = jpaModule.entityManager;
        this.jpaQuery = jpaModule.jpaQuery;
    }

    protected <T> JPAQuery<T> select(Expression<T> expr) {
        return this.jpaQuery.select(expr);
    }

    protected <T> JPAQuery<T> selectFrom(EntityPath<T> from) {
        return (JPAQuery) this.select((Expression) from).from(from);
    }
}
