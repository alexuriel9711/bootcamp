/**
 *     @author Harry Gómez <antixalex@gmail.com>
 *     @fileOverview ejercicio 4 modulo 3
 *     @licence BSD 3-Clause License
 */

let email = null;
let name = null;
let lastName = null;
let phone = null;
let pass = null;
let user = {};
const COUNTRY_CODE = "+57";

const wordToCapitalize = word => {
    let toCapitalize = null;
    if (word !== null && word !== undefined && word.length > 0) {
      toCapitalize = word[0].toUpperCase() + word.slice(1);
    }
    
    return toCapitalize;
  };

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
            name: data.name,
            last_name: data.lastName,
            phone: `${COUNTRY_CODE}${data.phone}`,
            pass: data.pass

        }
    }
    return buildData;
  }

  const promiseForSanitizeData = (data) => {;
    return new Promise((resolve, reject) => {email = data.email;
      name = wordToCapitalize(data.name);
      lastName = wordToCapitalize(data.lastName);
      phone = data.phone;
      pass = encodeBase64(data.pass);
      resolve();
    });
  };

  const promiseBuildData = () => {
    return new Promise((resolve, reject) => {
        user = buildData({name: name, lastName: lastName, phone: phone, pass: pass, email: email});
        resolve(user);
    });
  };

  const getPromiseDataFormMyForm = () => {;
    return new Promise((resolve, reject) => {
      const email = document.getElementById("email").value;
      const name = document.getElementById("name").value;
      const lastName = document.getElementById("lastName").value;
      const phone = document.getElementById("phone").value;
      const pass = document.getElementById("pass").value;
  
      resolve({
        email: email,
        name: name,
        lastName: lastName,
        phone: phone,
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



