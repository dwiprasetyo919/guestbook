import { DataSource } from "typeorm";
import { db } from "../configs";
import { User } from "../models/user.entity";
import { Guest } from "../models/guest.entity";

const AppDataSource = new DataSource({
  type: "postgres",
  host: db.host,
  port: parseInt(db.port),
  username: db.username,
  password: db.password,
  database: db.database,
  logging: false,
  synchronize: true,
  entities: [User,Guest],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
