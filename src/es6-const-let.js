var nameVar = "Sachin";
console.log(nameVar);

var multiplyObj = {
	numbers: [6,7,8,9,10],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map(
			(num) => num * this.multiplyBy
		)
	}
}

console.log(multiplyObj.multiply());

let count = 0;

let addOne = () => {
	console.log("add one");
	count++;
	renderCountApp();
}


let minusOne = () => {
	console.log("minus one");
	count--;
	renderCountApp();
}

let reset = () => {
	console.log("reset");
	count = 0;
	renderCountApp();
}


const appRoot = document.getElementById('app');


const renderCountApp = () => {
	const countTemplate = (
		<div>
			<h1>Count: {count}</h1>
			<button id="plusone" onClick={addOne}>+1</button>
			<button id="minusonssse" onClick={minusOne}>-1</button>
			<button id="reset" onClick={reset}>Reset</button>
		</div>
	);

	ReactDOM.render(countTemplate, appRoot);
}

renderCountApp();