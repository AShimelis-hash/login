import mongoose from 'mongoose'

// mongodb configuration

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> {
        console.log(" connection established")
    })
    await mongoose.connect(`${process.env.MONGODB_COM}/login`)
}

export default connectDB