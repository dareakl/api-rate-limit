/**
* api rate limiter nodejs redis
* @author Sathish
*/
 
 
this.app.get('/user-details/:id', this.rateLimiter.asGetParamter(), (request, response) => {
response.status(200).json('You are welcome here.');
});