const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // This should allow all domains by default
app.use(bodyParser.json());

app.post("/save-name", (req, res) => {
    console.log("Received data:", req.body);
    const { name1, name2 } = req.body;

    if (!name1 || !name2) {
        return res.status(400).json({ message: "Both names are required" });
    }

    fs.appendFileSync("usernames.txt", `${name1},${name2}\n`, "utf8");
    res.json({ message: "Names saved successfully!" });
});

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(3000, () => console.log("Server running on port 3000"));

