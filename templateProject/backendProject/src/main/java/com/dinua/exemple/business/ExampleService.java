package com.dinua.exemple.business;

import com.dinua.base.config.BaseService;
import com.dinua.base.config.JpaModule;
import com.dinua.exemple.dtos.QUser;
import com.dinua.exemple.dtos.User;

import java.util.List;

/**
 * Created by adrian.dinu on 10/23/2016.
 */
public class ExampleService extends BaseService {

    public ExampleService(JpaModule jpaModule) {
        super(jpaModule);
    }

    public String getText() {
        return "Hello from Service";
    }

    public List<User> findAll() {
        QUser qUser = QUser.user;
        List<User> users = selectFrom(qUser).fetch();
        return users;
    }
}
