import express from "express";
import connectDb from "./dbConnect/mongodb.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import otpRouter from "./routes/otpRouter.js";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import blogRouter from "./routes/blogRouter.js";
import commentRouter from "./routes/commentRouter.js";
dotenv.config();
connectDb();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/otp", otpRouter);
app.use("/api", userRouter);
app.use("/api", authRouter);
app.use("/api", blogRouter);
app.use("/api", commentRouter);

const port = process.env.PORT;

app.listen(port, console.log(`Server listening on port ${port}`));
