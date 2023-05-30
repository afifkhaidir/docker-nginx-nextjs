# Docker NGINX - NextJS - Express

## Getting Started
Make sure you have Docker installed on your computer. You have to run the Express (API) & NextJS (blog) services first:
```bash
$ docker-compose up api blog
```

then, you have to run the nginx service in the new terminal
```bash
$ docker-compose up nginx
```

After all of the service running, you can open `localhost:8080` in the browser to open the NextJS blog. But you may found an error. Your task is fixing the error by modifying nginx config (`nginx/default.conf`). You may need to restart nginx everytime you make changes on nginx config, so you have to running a shell on nginx container. To achieve that, you can type in the new terminal:
```bash
$ docker-compose exec nginx sh
```

Please refer to nginx presentation or the video about how to test the config file (make sure it doesn't error) and reload the nginx.


You have a restriction to **NOT** modify the api service (we can assume this is backend which out of our control).

Required functionality:
- [ ] Open the home page which has list of blog title
- [ ] Open the post detail page



## Stop the services
To stop all the running containers, you can run:
```bash
$ docker-compose down
```