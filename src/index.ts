import express from "express";

const server = express();
const port = 8000;


server.use(express.json());

server.get("/", (req, res) => {
    res.send("Hello World");
});


server.post("/", (req, res) => {
    const body = JSON.stringify(req.body);
    res.send(`You send: ${body}`);
});


server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on localhost:${port}`);
});
