import express from "express"; 

const app = express();

app.get("/api/helloworld", (req, res) => {
    res.send("Hello World!")
})

app.listen(5001, () => {
    console.log("Hello, this is your server!");
});