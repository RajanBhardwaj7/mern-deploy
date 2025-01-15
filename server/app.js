import express, { json } from 'express';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Ensure dotenv is loaded at the start

const app = express();

// middleware
const corsOptions={
    orgin: "http://localhost:3000"
}
app.use(express.json());
app.use(cors(corsOptions));

// connect mongodb
connect(process.env.MONGODB_URI)
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is listening on PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });

// route
app.get("/", (req, res) => {
    res.status(201).json({ message: "Connected to Backend!" });
});
