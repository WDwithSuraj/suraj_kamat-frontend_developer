const express = require('express');
const data = require("./db.json")

const app = express();
const port = 8000;

app.get("/data", (req, res) => {
    res.json(data)
})

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
