const server = require('./server');

const { PORT } = process.env;
const port = PORT || 31413;

server.listen(port, () => { console.log(`Server is listening on ${port}`) });
