"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// We will create an express app
const app = (0, express_1.default)();
// The port that the express server will listen on
const PORT = 3000;
app.use(express_1.default.json());
// Start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
