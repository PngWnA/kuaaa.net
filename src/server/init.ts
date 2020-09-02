import server from './server.js';
import config from './configure.json';

const port: number = config.port;

server.listen(port, () : void => { console.log(`Server is running on localhost:${port}.`) });
