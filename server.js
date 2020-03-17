const express = require("express");
const api = require("./source/api");
const html = require("./source/html");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", html);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));