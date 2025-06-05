import * as dotenv from 'dotenv';
dotenv.config()

interface Config {
    Port: number
    MongoURI: string
}

var config: Config;


export const configObj = (): Config => {

    if (config) {
        return config;
    }

    if (!process.env.PORT) {
        console.error("port is not present");
        process.exit(1);
    }

    const PORT = parseInt(process.env.PORT, 10)

    if (!process.env.MONGO_URI) {
        console.error("mongoURI is not present");
        process.exit(1);
    }

    config = {
        MongoURI: process.env.MONGO_URI as string,
        Port: PORT,
    }
    return config;
}