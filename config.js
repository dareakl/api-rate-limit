/**
 * api rate limiter nodejs redis
 * @author Sathish
 */
 
const client = require('./redis-database');
 
class Limiter{
 
    constructor(app){
        this.limiter = require('express-limiter')(app, client);
    }
 
    /**
     * For IP only
     */
    usingRemoteAddress() {
        return this.limiter({
            path: '/users',
            method: 'get',
            lookup: ['connection.remoteAddress'],
            total: 10,
            expire: 1000 * 60 * 60,
            onRateLimited: function (request, response, next) {
                response.status(429).json('You are not welcome here, Rate limit exceeded');
            }
        });
    }
}
 
module.exports = Limiter;


