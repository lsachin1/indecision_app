 
class Visible extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			visible: false
		}
		this.toggleText = this.toggleText.bind(this);
	}

	toggleText(){
		this.setState(
			(PrevState) => {
				return {
				visible: !PrevState.visible
				}
			}
		)
	}

	render(){

		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleText}>{ this.state.visible ? "Hide Details" : "Show Details" }</button>
				{this.state.visible && <p><br/><br/>Hey here is some info to explore:</p> }
			</div>
		);

	}
}

let appRoot = document.getElementById('app');

ReactDOM.render(<Visible />, appRoot);

class Person {

	constructor(name= 'Anonymus', age = 0){
		this.name = name;
		this.age = age;
	}

	getGreeting(){
		return `Hi! My Name is ${this.name}`;
	}

	getDescription(){
		return `Hi, my name is ${this.name } and I am ${this.age} years(s) old`;
	}
}

const person1 = new Person("Sachin Lokare", "37");
console.log(person1.getDescription());

class Traveler extends Person {

	constructor(name, age, homelocation){
		super(name, age);
		this.homelocation = homelocation;
	}

	hashomelocation(){
		return !!this.homelocation;
	}

	getGreeting(){
		let message = super.getGreeting();

		if(this.hashomelocation()){
			message += ` and My home location is ${this.homelocation}`;
		}

		return "--->"+message;
	}
}

const traveler = new Traveler("Sachin Lokare", "37", "California");
console.log(traveler.getGreeting());