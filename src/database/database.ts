import mongoose from "mongoose";


export const connectMongoDB = async (uri: string) => {
    mongoose.connect(uri).then(() => {
        console.log("connceted to mongo DB");
    }).catch((err) => {
        console.error("failed to connect to mongo db server", err);
        process.exit(1)
    })
}