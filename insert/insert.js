"use strict";
exports.__esModule = true;
var express = require("express");
var client_1 = require("../config/client");
var db_urls_1 = require("../config/db_urls");
var db_config_1 = require("../config/db_config");
var insert = express.Router().post("/", function (req, res) {
    client_1["default"].connect(db_urls_1["default"], function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db(db_config_1["default"].db_name);
            db.collection(db_config_1["default"].collection_name).insertOne({
                "e_id": req.body.e_id,
                "e_name": req.body.e_name,
                "e_sal": req.body.e_sal,
                "e_desgination": req.body.e_desgination,
                "dob": req.body.dob,
                "contact": req.body.contact,
                "e_habits": req.body.e_habits,
                "e_dept": req.body.e_dept,
                "gender": req.body.gender
            }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "insert": "success" });
                }
            });
        }
    });
});
exports["default"] = insert;
