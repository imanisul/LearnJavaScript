///async/await is a cleaner and more readable way to work with Promises.

async function getData(){
    let response = await fetch("https//google.com");

    let data = await response.json()


    console.log(data);
    
}

getData()