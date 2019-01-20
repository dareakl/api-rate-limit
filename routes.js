/**
* api rate limiter nodejs redis
* @author Sathish
*/
 
'use strict';
 
const RateLimiter = require('./config');
class Routes{
 
constructor(app){
       this.rateLimiter = new RateLimiter(app);
this.app = app;
}
appRoutes(){
        /**
        * rate Limter For /users route only based in IP address
        */
this.app.get('/users', this.rateLimiter.usingRemoteAddress(), (request, response) => {
            response.status(200).json('You are welcome here.');
});
}
 
routesConfig(){
this.appRoutes();
}
}
module.exports = Routes;

