"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const configs_1 = require("../configs");
const user_entity_1 = require("../models/user.entity");
const guest_entity_1 = require("../models/guest.entity");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: configs_1.db.host,
    port: parseInt(configs_1.db.port),
    username: configs_1.db.username,
    password: configs_1.db.password,
    database: configs_1.db.database,
    logging: false,
    synchronize: true,
    entities: [user_entity_1.User, guest_entity_1.Guest],
});
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
exports.default = AppDataSource;
