const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://malikhassanhu55:2W64GIuF7ulvvuo8@cluster0.xhhzsjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB
