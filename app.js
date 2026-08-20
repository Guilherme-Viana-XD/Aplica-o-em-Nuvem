const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.end('Servidor Node.js funcionando!!');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});