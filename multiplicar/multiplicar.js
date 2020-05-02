//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} en listarTabla no es un número.`);
            return;
        }

        let datas = '';

        for (let index = 1; index <= limite; index++) {
            datas += `${base} * ${index} = ${base*index}\n`.green;
            //console.log(`${base} * ${index} = ${base*index}\n`);

        }

        resolve(datas);

    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} en crearArchivo no es un número.`);
            return;
        }

        let data2 = '';

        for (let index = 1; index <= limite; index++) {
            let resultado = base * index;
            data2 += `${base} * ${index} = ${resultado}\n`;

        }

        //const data = new Uint8Array(Buffer.from('Hola mundo node.js'));

        fs.writeFile(`tablas/tabla-${base}x${limite}.txt`, data2, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}x${limite}.txt`.green);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}