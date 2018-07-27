# Review Questions

## What is Node.js?
Node.js is an open source server-side JavaScript platform for building fast, scalable network applications. It is single threaded, asynchronous,
and has access to node modules(the world's largest software registry).
## What is Express?
Express is a library(node module) that helps us manage http requests. It's a web application framework that sits on the node.js web server, wraps up the http module,
and adds extra functionality such as providing us an easy way to use middleware.
## Mention two parts of Express that you learned about this week.
Express provides an easy way of using middleware. Express is fast and unopinionated.
## What is Middleware?
Middleware is software that links two separate applications together. When using middleware in Express to make requests, middleware is a function executed by
the Express routing layer just before last the request handler and sits between a raw request and it's final intended route.
## What is a Resource?
Everything is a resource, and each resource has a unique uri. Resources have multiple representations and management of resources is done with HTTP methods.
## What can the API return to help clients know if a request was successful?
The API can return a HTTP status code, specifically one that starts with a 2 if a request was successful.
## How can we partition our application into sub-applications?
We can split our application into sub-applications using Express Routers.
## What is express.json() and why do we need it?
express.json() allows us to accept requests from clients and respond with data in JSON format
