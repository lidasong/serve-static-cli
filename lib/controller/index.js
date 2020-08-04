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
exports.getList = void 0;
const fs = require('fs-extra');
const path = require('path');
function getList(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const data = yield fs.readdir(path.join(cwd, ctx.path));
        yield ctx.render('index', {
            cwd: path.join(cwd, ctx.path),
            path: path.join(ctx.path, '/'),
            list: data
        });
    });
}
exports.getList = getList;
