import { app } from './app';
import { connectMongoDB } from './database/database';
import { configObj } from './config/config';


const startServer = async () => {
    try {
        const config = configObj()
        await connectMongoDB(config.MongoURI)
        app.listen(config.Port, () => {
            console.log(`server has successfully started on port ${config.Port}....`);
        })
    } catch (err) {
        console.error("failed to start server", err)
    }
}

startServer();