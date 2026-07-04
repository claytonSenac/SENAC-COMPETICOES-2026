const express = require("express");

module.exports = (service) => {

    const router = express.Router();

    router.get("/", (req, res) => {

        const name = req.query.name || "Mundo";

        res.json({
            message: service.sayHello(name)
        });

    });

    return router;

};