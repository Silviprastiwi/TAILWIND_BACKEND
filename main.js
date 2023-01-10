const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/getlist", function (req, res) {
  res.send({
    Sensor_suhu: [
      { suhu: 30, waktu: "2023-01-01 11:00" },
      { suhu: 38, waktu: "2023-01-05 11:30" },
      { suhu: 24, waktu: "2023-01-07 12:00" },
      { suhu: 34, waktu: "2023-01-08 12:00" },
    ],
  });
});

app.get("/Mie", function (req, res) {
  res.send("Mie Goreng, Mie Kuah, Mie Pedas");
});

app.get("/Sop", function (req, res) {
  res.send("Sop Ayam, Sop Sapi, Sop Sosis.");
});

app.post("/Pesan", (req, res) => {
  res.send({
    message: "Pesan Makanan Anda:",
    body: req.body,
  });
});

app.listen(port, () => {
  console.log("App running on http://localhost:3000/");
});
