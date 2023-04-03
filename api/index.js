import express from "express";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import commentsRouter from "./routes/comments.js"
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/comments", commentsRouter);

app.listen(8800, () => {
  console.log("Connected!");
});
