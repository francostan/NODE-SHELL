module.exports = {
    pwd: function () {
      //si accedemos al elemento [1] accedemos a la ruta donde esta nuestro archivo
      process.stdout.write(process.argv[1].toString());
      process.stdout.write("\nprompt > ");
    },
    date: function () {
      process.stdout.write(new Date().toString());
      process.stdout.write("\nprompt > ");
    },
    ls: function () {
      let fs = require("fs");
      fs.readdir(".", function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
          process.stdout.write(file.toString() + "\n");
        });
      });
      process.stdout.write("\nprompt > ");
    },
    echo: function (palabra) {
      process.stdout.write(palabra.slice(1).join(" "));
      process.stdout.write("\nprompt > ");
    },
    cat: function (nombreArchivo) {
      const nA = nombreArchivo.slice(1).join(" ");
      let fs = require("fs");
      console.log(nA);
      fs.readFile(nA.trim(), "utf8", (err, content) => {
        if (err) throw err;
        console.log(content);
      });
      process.stdout.write("\nprompt > ");
    },
  };
