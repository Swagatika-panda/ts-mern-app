"use strict";
exports.__esModule = true;
var express = require("express");
var db_urls_1 = require("../config/db_urls");
var client_1 = require("../config/client");
var db_config_1 = require("../config/db_config");
var fetch = express.Router().get("/", function (req, res) {
    //cliet info
    client_1["default"].connect(db_urls_1["default"], function (err, client) {
        var db = client.db(db_config_1["default"].db_name);
        db.collection(db_config_1["default"].collection_name).find().toArray(function (err, array) {
            if (err)
                throw err;
            else {
                res.send(array);
            }
        });
    });
});
exports["default"] = fetch;
