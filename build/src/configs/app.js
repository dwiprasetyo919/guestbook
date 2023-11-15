"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 3000,
    appKey: process.env.APP_KEY || "secret",
    appId: process.env.APP_ID || "secret",
    isServerless: process.env.IS_SERVERLESS || false,
    jwt: {
        secret: process.env.JWT_SECRET || "secret",
    },
};
