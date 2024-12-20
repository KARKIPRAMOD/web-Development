const mongoose = require("mongoose");

async function connectDatabase(URL) {
    mongoose.connect(URL);
};

module.exports = {connectDatabase};