// const fs = require("fs");

// fs.writeFileSync("catatan.txt", "Nama Saya Muhammad Asyrof");
// fs.appendFileSync("catatan.txt", " Saya tinggal di Padang");

// ====================

// const catatan = require("./catatan.js");
// const pesan = catatan();
// console.log(pesan);

// =======================

// const validator = require("validator");
// const ambilCatatan = require("./catatan.js");
// const pesan = ambilCatatan();
// console.log(pesan);
// console.log(validator.isURL("https://proska.com"));

// ================================
// latihan 1
// const chalk = require("chalk");

// // console.log(chalk.blue("print warna biru sukses"));
// console.log(
//   chalk.green(
//     "Hello",
//     chalk.underline.redBright("print warna lain sukses") + "!"
//   )
// );

// ================================
// command line arguments
// a;
// const ambilCatatan = require("./catatan.js");

// const command = process.argv[5];
// console.log(process.argv[2]);

// if (command === "tambah") {
//   console.log("Tambah Catatan");
// } else if (command === "hapus") {
//   console.log("Hapus Catatan");
// }
// ======================================================
// command line arguments
// // b;
const yargs = require("yargs");
const catatan = require("./catatan.js");
// Kustomisasi versi yargs yargs.version('10.1.0')

// Membuat perintah (command) 'tambah'
// yargs.command({
//   command: "tambah",
//   describe: "tambah sebuah catatan baru",
//   handler: function () {
//     console.log("Sebuah catatan baru ditambahkan!");
//   },
// });

yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul Catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  // handler: function (argv) {
  //   console.log("Judul: " + argv.judul);
  //   console.log("Isi: " + argv.isi);
  // },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});

// Perintah hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  handler: function () {
    console.log("Catatan berhasil dihapus");
  },
});

// // Instruksi no.4 letakan disini

// // letakan bagian ini pada baris terakhir
// console.log(yargs.argv);
yargs.parse;
