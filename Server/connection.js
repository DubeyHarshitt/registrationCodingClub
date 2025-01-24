const mongoose = require('mongoose');

const connectionDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        if(connection.STATES.connected) return console.log(`DB Connected Successfully`);
    } catch (error) {
        return console.log(`DB Disconnected :- `, error);
    }
};

module.exports = { connectionDB };