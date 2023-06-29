import { Sequelize } from "sequelize-typescript";

import { Cinema } from "../models/cinema.model";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "cinema",
  logging: false,
//   models: [Cinema],
});

export default connection;