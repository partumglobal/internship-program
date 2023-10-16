const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://myAtlasDBUser:TOXb1qtMhnZ35XRk@myatlasclusteredu.olrkqjf.mongodb.net/partum_todos',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log("connected to db");
    } catch (error) {
        console.error("error connection");
    }
}


module.exports = { connect }