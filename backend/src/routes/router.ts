import { Router } from "express";
import { createUser } from "../controller/UserController";
import { createAccess, getallAccesses } from "../controller/AccessController";
import { createAttendance, getAllAttendance } from "../controller/AttendanceController";

export const router = Router()

router.post("/user", createUser);
router.post("/access", createAccess);
router.get("/accesses", getallAccesses);
router.post("/attendance/:userId", createAttendance);
router.get("/attendances", getAllAttendance);