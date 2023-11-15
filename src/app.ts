import express, { Express, Request, Response } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api/v1", routes);

/** Error handling */
app.use((req, res, next) => {
  res.send({
    code: 404,
    error: "Page not found",
  });
  return;
});

function printPattern(rows: number, columns: number): void {
    for (let i = 1; i <= rows; i++) {
      let row = '';
      for (let j = 1; j <= columns; j++) {
        row += `${i * j} `;
      }
      console.log(row);
    }
}
printPattern(5, 5);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


module.exports = app;
