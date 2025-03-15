import express from "express";
import dotenv from "dotenv";
import moviesRoutes from "./src/Routes/moviesRoutes.js";

dotenv.config()

const app = express();
app.use(express.json());

// utilizando as rotas 
app.use("/api", moviesRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Servidor rodando na porta: ", PORT)
})