//A Promise is an object that represents the eventual completion or failure of an asynchronous operation.


const myPromise = new Promise((resolve, reject) => {
         let success = true;

         if(success){
            resolve("Fetch Data Successful")
         }
        else{
            reject("Rjected")
        }
        })