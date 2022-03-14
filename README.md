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

After all of the service running, you can open `localhost:8080` in the browser to open the NextJS blog. But you may found the error. Your task is fixing the error. Feel free to fork this repo.

You have the restriction to NOT modify the api service under (we can assume this is backend service).

Required functionality:
- [ ] Open the home page which has list of blog title
- [ ] Open the post detail page