const express = require('express'); // aplikasi utama adalah app.js
const db = require('./config/db');
const app = express()

const allRoutes = require('./routes');

const PORT = process.env.PORT || 3000

db.
then(() => {
  console.log("database terkoneksi")
})
.catch((err) => {
  console.log(err);
})

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})