const express = require("express");

module.exports = (service) => {

    const router = express.Router();

    router.get("/sum", (req, res) => {

        const a = Number(req.query.a);
        const b = Number(req.query.b);

        res.json({
            result: service.sum(a, b)
        });

    });

    router.get("/multiply", (req, res) => {

        const a = Number(req.query.a);
        const b = Number(req.query.b);

        res.json({
            result: service.multiply(a, b)
        });

    });

    return router;

};