const service = require("./service");
const routes = require("./routes");

module.exports = {

    register(app) {

        app.use("/hello", routes(service));

    },

    service

};