import CryptoJS from 'crypto-js';

export function encryptMessage(message, key, callback) {
   const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
   callback(encryptedMessage);
}

export function encryptMessagePromise(message, key) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
         if (encryptedMessage) {
            // resolve(encryptedMessage);
            resolve('sdfsdf');
         } else {
            reject(new Error('Failed to encrypt message'));
         }
      }, 2000);
   });
}