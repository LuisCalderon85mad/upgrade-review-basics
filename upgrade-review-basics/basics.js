/* **Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()** */

// CON FILTER (FAIL)

/*
const movies = [
    { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
    { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
    { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"],
    },{ title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"],},
  ];

const uniques = movies.categories.filter((valor,indice) => {
    return movies.indexOf(valor) === indice; // no me deja acceder a categories.
});

console.log(uniques); */


// CON SET (FAIL)

/*
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"],
  },
  { title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"],},
];

let category2 = [...new Set(movies[categories])];

console.log(category2); */

/*
// FOR INCLUYENDO .categories (FAIL)
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"],
  },{ title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"],},
];

const newMovies = [];

for (var i = 0; i < movies.length; i++) {
  const category = movies[i];
  if (!newMovies.categories.includes(movies[i])) {
    newMovies.push(category);
  }
}

console.log(newMovies);
*/


// CON FOR EACH  :) 

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categoriasFilm = [];

for (const movie of movies) {

    movie.categories.forEach(function (elemento) {
        if(!categoriasFilm.includes(elemento)){
            categoriasFilm.push(elemento);
        }
    });

}

console.log(categoriasFilm);



// ITERACIÓN 2 MIX FORS 
/*
Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/


const users = [
    {name: 'Manolo el del bombo',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 50},
        rain: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'Mortadelo',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 30},
        shower: {format: 'ogg', volume: 55},
        train: {format: 'mp3', volume: 60},
    }
    },
    {name: 'Super Lopez',
     favoritesSounds: {
        shower: {format: 'mp3', volume: 50},
        train: {format: 'ogg', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
    {name: 'El culebra',
     favoritesSounds: {
        waves: {format: 'mp3', volume: 67},
        wind: {format: 'ogg', volume: 35},
        firecamp: {format: 'mp3', volume: 60},
        firecamp: {format: 'mp3', volume: 80},
    }
    },
]

let volumeTotal = [];


for (const user of users) {
    for (const key in user.favoritesSounds) {
        volumeTotal.push(user.favoritesSounds[key].volume);
    }
}

// console.log(volumeTotal);

let average = 0; 

for (let i = 0; i < volumeTotal.length; i++){
    average += volumeTotal[i];
}

console.log(average/volumeTotal.length);



// ITERACIÓN 3 

/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */ 

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let count = []; 

for (const user of users) {
    for (const key in user.name) {
        // console.log(user.name) 
        // ¿? 
    }
}



// ITERACIÓN 4 
/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos. */ 


const newArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (const name of array) {
        if (name === text) {
            return array.indexOf(name);
        }
    }
}

console.log("Puesto para Mosquito", findArrayIndex(newArray, "Mosquito"));



 // CON FLECHA 

 const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

 const position = animals.findIndex(animal => animal === "Salamandra");

 console.log("Puesto para Salamandra",(position)); 



 /* ITERACIÓN 5 
Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random(); */ 

function rollDice(faces) {
    return Math.trunc
    (Math.random() * faces);
}

console.log(rollDice(8));



 /* ITERACIÓN 6 
 Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */ 

// NO LO ENTIENDO BIEN. Lo he sacado copiando de esta documentación: https://es.stackoverflow.com/questions/381219/como-hacer-una-funcion-swap-con-javascript */

function swap(lista, a, b) {
    let newNames2; 

    newNames2 = lista[a];
    lista[a] = b;
    lista[b] = newNames2;

    return lista;
}

let lista = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(lista, 4, 6));