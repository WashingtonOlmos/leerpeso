const ctrl = require("./Controllers/prueba.js");
const express = require("express");
 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = "";

app.get( path + "/peso", (req, res) => {

    res.json( ctrl.store );
});

const PORT = 8300;
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}.`);
});
