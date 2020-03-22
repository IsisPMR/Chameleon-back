import express, { Application } from "express";
import tutorialRoutes from "../src/routes/tutorialsRoutes";
import bodyParser from "body-parser";
import cors from "cors";
 
const app: Application = express();

// 3th party middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())

// Todos routes
app.use('/tutorials', tutorialRoutes);

export default app;