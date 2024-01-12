import { Router } from "express";
import { createUser, verifyToken } from "../Controllers/Users.js";
import { Login } from "../Controllers/Users.js";
const router = Router();

router.post("/signup",createUser)
router.post("/login",Login)
router.get("/verifyToken",verifyToken)


export default router;
