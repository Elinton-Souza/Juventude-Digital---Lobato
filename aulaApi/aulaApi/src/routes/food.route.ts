import { Router } from "express";
import { getFoods } from "../controllers/food.controller";

const foodRoutes = Router();

foodRoutes.get("/", getFoods);

export default foodRoutes;
