import express from "express";
import dotenv from "dotenv";

const env = dotenv.config()

if (env.error) {
  throw env.error
}

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

//app.use('/auth', authRoutes);
//fazer um buildroutes em algum lugar