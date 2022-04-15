const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

mongoose.connect("mongodb://localhost:27017/SocioBookDB",{useNewUrlParser: true});

