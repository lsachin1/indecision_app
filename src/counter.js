class Counter extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			count : props.count
		}

		this.addOne =this.addOne.bind(this);
		this.minusOne =this.minusOne.bind(this);
		this.reset =this.reset.bind(this);
	}

	componentDidMount(){

		try {
			var json = JSON.parse(localStorage.getItem('count'));
			var countNumber = parseInt(json);

			if(countNumber){
				this.setState(
					() => {
						return {
							count: countNumber
						}
					}
				)
			}
		} catch (e) {

		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.count !== this.state.count){
			localStorage.setItem('count', JSON.stringify(this.state.count))
		}
	}

	addOne(){
		console.log('add one'+this.state.count);
		this.setState(
			(PrevState) => {
				return {
					count: PrevState.count+1
				}
			}
		) 
	}

	minusOne() {
		console.log('minus one');
		this.setState(
			(PrevState) => {
				return {
					count: PrevState.count - 1
				}
			}
		)
	}

	reset(){
		console.log('reset one');
		this.setState(
			() => {
				return { 
					count: 0 
				}
			}
		)
	}

	render(){
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button id="addone" onClick={this.addOne}>+1</button>
				<button id="minusone" onClick={this.minusOne}>-1</button>
				<button id="reset" onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	count : 0
}

let appRoot = document.getElementById('app');

ReactDOM.render(<Counter />, appRoot);