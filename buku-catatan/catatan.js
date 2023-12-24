// const ambilCatatan = function () {
//   return "Ini Catatan Muhammad Asyrof...";
// };
// module.exports = ambilCatatan;

const fs = require("fs");

const ambilCatatan = function () {
  return "Ini Catatan Randi Proska...";
};

const tambahCatatan = function (judul, isi) {
  const catatan = muatCatatan();
  const catatanGanda = catatan.filter(function (note) {
    return note.title === judul;
  });

  if (catatanGanda.length === 0) {
    catatan.push({
      judul: judul,
      isi: isi,
    });
    simpanCatatan(catatan);
    console.log("Catatan baru ditambahkan!");
  } else {
    console.log("Judul catatan telah dipakai");
  }
};

const simpanCatatan = function (catatan) {
  const dataJSON = JSON.stringify(catatan);
  fs.writeFileSync("catatan.json", dataJSON);
};

const muatCatatan = function () {
  try {
    const dataBuffer = fs.readFileSync("catatan.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  ambilCatatan: ambilCatatan,
  tambahCatatan: tambahCatatan,
};
