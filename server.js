const Path = require("path");
const JsonServer = require("json-server");

const jsonServerInstance = JsonServer.create();

const router = JsonServer.router(
    Path.join(__dirname, "src", "database", "db.json")
);

const middlewares = JsonServer.defaults({logger: false});
jsonServerInstance.use(middlewares);

jsonServerInstance.use(JsonServer.rewriter({
    "/api/*": "/$1",
}));

jsonServerInstance.use(router);

const jsonServerPort = process.env.PORT || 8080;

jsonServerInstance.listen(jsonServerPort, () => {
    console.log(`Json server is running on port ${jsonServerPort}`)
});