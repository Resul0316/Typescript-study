let title: string = 'Movie Title'



// Type Inference
let tvShow = 'Okive Kitterridge';
// tvShow = false // can't do it

// any
let thing: any = 'hello'
thing = false
thing = 1

///////////////


// FUNCTIONS
// NOT BEST PRACTICE
function square(num) {
    return num * num
}

// normally we can use whatever type we want but it is not the best way. We must specify what type it is!
square(12);
square('test')
square(true)


function squareTrue(num: number) {
    return num * num
}
squareTrue('hey') // can't be done

// we can add many parameters

const doSomething = (person: string, age: number) => {
    console.log(person, age)
}

doSomething('Ahmet', 27);

function greet(person: string = 'Stranager') {
    return `Hello ${person}`;
}

greet()
greet('Tony')


function random (num: number) {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num;
}

// if we want to return a number we must do as following:
const add =(x:number, y:number):number => {
    return x *y
}

// There are some cases that we don't need to add any type because Typescritp alredy nows it.
const colors = ['red', 'yellow', 'purple']
// in this case we don't need to add the type
colors.map(color => {

})

// Never Type
function makeError(msg:string): never {
throw new Error (msg);   
}
 
