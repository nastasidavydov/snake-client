// setup interface to handle user input from stdin // istening for user input via the keyboard.

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "\033[A") {
      process.stdout.write('Move: up')
    } else if (key === "\033[B") {
      process.stdout.write('Move: down')
    } else if (key === "\033[D") {
      process.stdout.write('Move: left')
    } else if (key === "\033[C") {
      process.stdout.write('Move: right')
    }

  };

  stdin.on("data", handleUserInput); // register an event listener for stdin, it will run callback when i receive input from keyboard

  return stdin;
};

module.exports = {setupInput};