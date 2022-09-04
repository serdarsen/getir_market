const path = require("path");

const jsonServer = require("json-server");
const app = jsonServer.create();

const router = jsonServer.router(
    path.join(__dirname, "src", "mock", "db.json")
);

const middlewares = jsonServer.defaults();
app.use(middlewares);

app.use(jsonServer.rewriter({
    "/api/*": "/$1",
}));

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
