const express = require("express");

const app = express();

app.use(express.json());

const modules = [
    require("./modules/calculator"),
    require("./modules/hello")
];

// Registra todos os módulos
modules.forEach(module => module.register(app));

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000");
});