// const express = require("express");

// const app = express();
// const path = require("path");
// const PORT = 3000;

// app.use(express.static('.'));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.listen(PORT);

let SCOPE = false;
let SCOPE_LEVELS = 0;
let BLOCK_OPENS = [];
let READLINE = false;
let TOKENS_ = {};
let FILE_LINE_DATA = [];
let VALIDATED_SYNTAX = {};
let READING_USER_INPUT = false;
let LINE = 0;
let Tokens = [];
let FLOAT = false;
let EXPONENT = false;
let COMMENTARY = false;
let prevStates = (operatorStates = numberStates = []);
let prevStateIndex = [];

let prevType = undefined;
