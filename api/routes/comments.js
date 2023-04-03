import express from "express";
import { addComments, getComments } from "../controllers/comments.js";

const router = express.Router();

router.post("/", addComments);
router.get("/:pid", getComments);


export default router;
