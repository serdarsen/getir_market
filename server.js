const path = require("path");

const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router(
    path.join(__dirname, "src", "data", "db.json")
);

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.rewriter({
    "/api/*": "/$1",
}));

server.use(router);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
