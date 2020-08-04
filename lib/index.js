"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const json = require("koa-json");
const routers_1 = require("./routers");
const debug_1 = require("debug");
const serve = require('koa-static');
const render = require('koa-art-template');
const path = require('path');
const open = require('open');
const getPort = require('get-port');
const debuger = debug_1.default('koa:app');
const app = new Koa();
render(app, {
    root: path.join(__dirname, '../views'),
    extname: '.art'
});
app.use(logger())
    .use(json())
    .use(bodyParser())
    .use(serve('.'));
app.use(routers_1.default.routes());
const start = ((options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const port = yield getPort({ port: +process.env.PORT || options.port });
    app.listen(port, () => {
        console.log('app starting at ', port);
        debuger('app:entry');
        try {
            open(`http:127.0.0.1:${port}`);
        }
        catch (err) {
            console.error(err);
        }
    });
}));
exports.default = start;
