import express from "express";
import foodRoutes from "./routes/food.route";
const app = express();
app.use(express.json());

app.use("/food", foodRoutes);

app.listen(3000, () => {
  console.log("Vamo lobão!!!");
});
