const http = require('http');
const server = http.createServer((req, res) => {
    res.write("welcome sir/madam ");


});
server.listen(2080, () => {
  console.log('Server started on port 2080');
}); 


// const http = require('http');
http.createServer((req, res) => {
    
  res.end('come again soon!');
});
server.listen(2080, () => {
  console.log('Server started on port 2080');
});  