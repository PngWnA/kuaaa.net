const server = require('./server');
const config = require('./config.json');

const port: number = config.port || 80;

server.listen(port, () => { console.log(`Server is running on localhost:${port}.`) });
