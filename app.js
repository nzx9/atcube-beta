"use strict";
var express = require("express");
var app = express();
//middlewears
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
//visual routes
app.use("/", express.static("public"));
//error handling
app.use(function (req, res, callback) {
    var error = new Error("Not Found");
    error.status = 404;
    callback(error);
});
app.use(function (error, req, res, callback) {
    res.status(error.status || 500);
    res.json({
        error: error.message
    });
});
module.exports = app;
