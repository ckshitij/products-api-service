import { app } from './app';


const startServer = async () => {
    try {
        app.listen(7008, () => {
            console.log(`server has successfully started on port 7008....`);
        })
    } catch (err) {
        console.error("failed to start server", err)
    }
}

startServer();