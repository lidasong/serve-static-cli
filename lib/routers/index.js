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
const Router = require("@koa/router");
const controller_1 = require("../controller");
const extname = require('get-ext');
const router = Router();
router.get('/', controller_1.getList);
router.get('/**', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const ext = extname(ctx.path);
    console.log(ext, 'extension');
    if (!ext) {
        yield controller_1.getList(ctx);
    }
}));
exports.default = router;
