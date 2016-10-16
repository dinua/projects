/**
 * Created by adrian.dinu on 10/16/2016.
 */
angular.module('AuthService', [])
    .service('UserLogged', function () {

        this.setUser = function (user) {
            console.log (user);
            this.user = user;
        };

        this.getUser = function () {
            return this.user;
        };

    });
