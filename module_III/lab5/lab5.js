/**
 *     @author Harry Gómez <antixalex@gmail.com>
 *     @fileOverview ejercicio 5 modulo 3
 *     @licence BSD 3-Clause License
 */


let email = null;
let pass = null;
let login = {};

const encodeBase64 = word => {
  let encodedStringBtoA = undefined;
  if (word !== null && word !== undefined && word.length > 0) {
    encodedStringBtoA = btoa(word);
  }
  
  return encodedStringBtoA;
};

const buildData = data => {
  let buildData = null;

  if (data !== null && data !== undefined){
      buildData = {
          email: data.email,
          pass: data.pass

      }
  }
  return buildData;
}

const promiseForSanitizeData = (data) => {;
  return new Promise((resolve, reject) => {email = data.email;
    pass = encodeBase64(data.pass);
    resolve();
  });
};

const promiseBuildData = () => {
  return new Promise((resolve, reject) => {
      login = buildData({pass: pass, email: email});
      resolve(login);
  });
};

const getPromiseDataFormMyForm = () => {;
  return new Promise((resolve, reject) => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    resolve({
      email: email,
      pass: pass
    });
  });
};

const getDataFormMyForm = () => {
  getPromiseDataFormMyForm()
    .then(result => {
      return promiseForSanitizeData(result);
    })
    .then(result => {
      return promiseBuildData(result);
    })
    .then(result => {
      console.log(result);
    });
};