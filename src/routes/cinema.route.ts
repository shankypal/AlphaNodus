import { Router } from "express";

import {
    createCinema,
    deleteCinema,
    getAllCinema,
    updateCinema,
    getCinemaById,
} from "../controllers/cinema.controller";

const router = Router();

router.post("/", createCinema);

router.get("/", getAllCinema);

router.get("/:id", getCinemaById);

router.put("/:id", updateCinema);

router.delete("/:id", deleteCinema);

export default router;