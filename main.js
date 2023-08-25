//DESTRUCTURING


//Array

const numbers = [1, 3, 5, 7];

const [a, b, c] = numbers;

console.log(a);


//Object

const output = {
	
	name:"karthi",
	
	age:20,

}

const {name, age} = output;

console.log(name);


//Nested Object

const nest = {outer:
	
	{inner:
	
	{
		name1:"karthi",
	
		place:"Pavoorchatram",
		
	}
	}
}

const {outer:{inner:{name1, place}}} = nest;

console.log(place);



