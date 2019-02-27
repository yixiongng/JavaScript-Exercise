//fizzbuzz
let div3 = "Fizz";
let div5 = "Buzz";
for(let i=1;i<=100;i++)
{
	if(i%3 == 0)
		console.log(div3);

	else if(i%3 != 0 && i%5 == 0)
	console.log(div5);

	else
	console.log(i);
}

//fizzbuzz version 2
for(let i=1;i<=100;i++)
{
	if(i%3 == 0 && i%5 !=0)
		console.log(div3);

	else if(i%3 != 0 && i%5 == 0)
	console.log(div5);

	else if(i%3 == 0 && i%5 == 0)
	console.log(div3+div5);

	else
	console.log(i);
}