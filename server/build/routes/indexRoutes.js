"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        console.log('mtav');
        this.router.get('/', function (req, res) {
            res.send('hello');
        });
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
