import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import apiRoutes from "./routes/apiRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.use("/api", apiRoutes);

app.use(errorMiddleware);

export default app;