import express from "express";

const PORT = 3001;
const app = express();

app.get("/", (_req, res) => {
  res.send("Servidor Express con Typescript funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
