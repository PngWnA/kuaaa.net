import server from './server.js';

const port: number = Number(process.env.PORT) || 31413;

server.listen(port, () : void => { console.log(`Server is running on localhost:${port}.`) });
