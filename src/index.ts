import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Liebling");
});

app.get("/status", (req, res) => {
    res.send("OK");
});


app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started on localhost:${port}`);
});
