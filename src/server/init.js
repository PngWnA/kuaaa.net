import server from './server.js';

const port = Number(process.env.PORT) || 31413;

server.listen(port, () => { console.log(`Server is running on localhost:${port}.`) });
