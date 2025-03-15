import express from "express";
import { getMoveis } from "../controllers/moviesControllers.js";

const router = express.Router();

router.get("/", getMoveis)

export default router;