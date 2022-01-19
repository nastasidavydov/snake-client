// setup interface to handle user input from stdin // istening for user input via the keyboard.

// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "w") {
      connection.write('Move: up');
    } else if (key === "a") {
      connection.write('Move: left');
    } else if (key === "s") {
      connection.write('Move: down');
    } else if (key === "d") {
      connection.write('Move: right');
    }

  };

  stdin.on("data", handleUserInput); // register an event listener for stdin, it will run callback when i receive input from keyboard

  return stdin;
};

module.exports = {setupInput};


// } else if (key === "\033[A") {
//   connection.write('Move: up');
// } else if (key === "\033[B") {
//   connection.write('Move: left');
// } else if (key === "\033[D") {
//   connection.write('Move: down');
// } else if (key === "\033[C") {
//   connection.write('Move: right');