// Задача 1


function sum(a, b){ 
    return new Promise((resolve)=>{
    setTimeout(()=>{
        let result = a + b;
        resolve(result);
    },Math.random() * 1000);
})
}
sum(14, 25).then(function(value){ 
    console.log("Результат сложения:", value);
});



// Задача 2


function exp(c){ 
    return new Promise((resolve)=>{
    setTimeout(()=>{
        let result = c**2;
        resolve(result);
    },Math.random() * 1000);
})
}
exp(8).then(function(value){ 
    console.log("Результат возведения в степень [2]:", value);
});



// Задача 3


let arr = [];
for ( i = 0; i < 10; i++ ) {
    arr.push( Math.round( Math.random() * 10 ));
} 

let arr2 = arr.map(function exp(num){ 
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let result = num**2;
            resolve(result);
        },Math.random() * 1000);
    })
    })
    Promise.all(arr2).then(function(value){ 
        alert("Результат возведения массива в степень [2]:"+ value);
    })
    