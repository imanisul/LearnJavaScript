const employee = {
    name : "Anisul",
    address : {
        city : "Mohali",
        state : "Punjab"
    }
};


const {address : {city}} = employee;

console.log(city);
