"use strict";
// without express.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.write("hellow kuku");
            res.end();
            break;
        case "/home":
            res.write("Felix is here");
            res.end();
            break;
    }
});
server.listen(4000, () => {
    console.log("server is walking");
});
