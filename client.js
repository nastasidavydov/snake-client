const net = require("net");
const { IP, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server'); //<-- log to me when connected
    conn.write('Name: NAS');  //<--send to server
    
  })

  // conn.on('connect', () => {
  //   let movements = ['Move: up', 'Move: left', 'Move: down', 'Move: right']
  //   let interval = 0;
  //   for (let move of movements) {
  //     setInterval(() => {
  //       conn.write(move);
  //     }, 50)
  //   }
    
  // })

  conn.on('data', (data) => {
    console.log(`Message from server:  ${data}`)  //<-- code that defines what to do when an event occurs is often called an event handler.
  })

  return conn; // <-- an object represents the connection with the server, have methods and properties enable us to interact with te server
};

module.exports = {connect};