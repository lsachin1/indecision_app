class OldSyntax {
	constructor(){
		this.name="Sachin";
		this.getName = this.getName.bind(this);
	}

	getName(){
		console.log(this.name);
	}
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
const getName = oldSyntax.getName;

console.log(getName());

class NewSyntax {
	name = 'Jhon';
	getName = () => {
		console.log(this.name);
	}


}

const newSyntax = new NewSyntax();
console.log(newSyntax);
const getnew = newSyntax.getName;
console.log(getnew());
