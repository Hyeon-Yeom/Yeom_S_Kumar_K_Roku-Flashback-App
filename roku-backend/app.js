import express from 'express';
import { createServer } from 'http';
// Changes start here
import path from 'path';

const basePath = process.cwd();
const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);

app.use(express.static(path.join(basePath, './dist')));

// Serve up the front end
app.get('/', (req, res) => {
    res.sendFile(index.html);
})

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

httpServer.listen(port, () => {
    console.log(`chat server up and running on ${port}`);
});