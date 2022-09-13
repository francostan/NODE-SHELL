// Un prompt como output
process.stdout.write("prompt > ");

//recibimos el modulo exportado de commands.js
const commands = require("./commands");
// El evento STDIN 'data' se dispara cuando el usuario escribe una lÃ­nea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim();
  let cmdEcho = data.toString().split(" ");
  if (cmd === "pwd") {
    commands.pwd();
  }
  if (cmd.toString() === "date") {
    commands.date();
  }
  if (cmd === "ls") {
    commands.ls();
  }
  if (cmdEcho[0] === "echo") {
    commands.echo(cmdEcho);
  }
  if (cmdEcho[0] === "cat") {
    commands.cat(cmdEcho);
  }
});
