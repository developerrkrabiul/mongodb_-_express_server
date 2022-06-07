const mongoose = require('mongoose');

const connetMongoDB = async () => {

    try{
        let connect = await mongoose.connect('mongodb+srv://rkrabiul:rkrabiul9876543210@first-cluster.aizjw.mongodb.net/Assignment_1?retryWrites=true&w=majority');
        console.log(`MongoDB Connect`.yellow);
    }catch(error){
        console.log(error);
    }

}


// All Exports here
module.exports = connetMongoDB;