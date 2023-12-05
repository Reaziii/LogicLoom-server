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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const judgeservers_1 = __importDefault(require("../models/judgeservers"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.send({ status: false, message: "unauthorized" });
        }
        let _judge = yield judgeservers_1.default.findOne({ token: token });
        if (!_judge)
            throw "";
        req.judge = {
            slug: _judge.slug,
            name: _judge.name
        };
        next();
    }
    catch (err) {
        return res.status(404).send({ status: false, message: "unauthorized" });
    }
});
