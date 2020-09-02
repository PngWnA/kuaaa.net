import server from './server.js';
import config from './configure.json';

const port: number = config.port || 31413;

server.listen(port, () : void => { console.log(`Server is running on localhost:${port}.`) });
