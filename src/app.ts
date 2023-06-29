import express from 'express';
import connection from './db/config';
import cinemaRoutes from './routes/cinema.route';
import { json, urlencoded } from "body-parser";
import "reflect-metadata";
const app = express();
const port = 3000;
app.use(json());
app.use(urlencoded({ extended: true }));


connection.sync().then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
        console.log("Error", err);
    });
app.use("/cinema", cinemaRoutes);
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(500).json({ message: err.message });
    }
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/createCinema', (req, res) => {
    res.send("created successfully");
})
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});