import { Router } from "express";
import { createSong } from "../Controllers/Songs.js";

const router = Router();

router.post("/create",createSong)

export default router;
