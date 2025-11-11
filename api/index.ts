import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

/** Express application. */
const app = express();

/** CORS configuration. */
const allowedOrigins = process.env.ORIGIN?.split(",").map(s => s.trim()).filter(Boolean);
app.use(
  cors({ origin: allowedOrigins })
);

/** JSON body parser. */
app.use(express.json());

/** Listening port. */
const PORT = Number(process.env.PORT);

/** GET / - Simple healthcheck to verify that the server is up. */
app.get("/", (_req: Request, res: Response) => {
  res.send("Server running");
});

/** Server start. */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
