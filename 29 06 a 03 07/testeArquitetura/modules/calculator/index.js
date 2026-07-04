const service = require("./service");
const routes = require("./routes");

module.exports = {

    register(app) {

        app.use("/calculator", routes(service));

    },

    service

};