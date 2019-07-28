class IndecisionApp extends React.Component {

	constructor(props){
		super(props);
		this.removeAll = this.removeAll.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.state = {
			error: undefined,
			options: []
		}
	}

	removeAll(){
		this.setState(
			() => {
				return {
					options: []
				};
			}
		)
	}

	removeItem(args) {
		this.setState(
			(prevState) => {
				return {
					options: prevState.options.filter(
						(option) => {
							if(option !== args) return true
						}
					)
				};

				
			}
		)
	}

	formSubmit(e){ 
		e.preventDefault();
		let option = e.target.elements.option.value.trim();
		e.target.elements.option.value = '';
		
		if(!option){
			this.setState(
				() => {
					return {
						error: 'Please enter the option to add'
					}
				}
			)
		}else if(this.state.options.indexOf(option) > -1){
			this.setState(
				() => {
					return {
						error: 'Entry is already exist in the database!!'
					}
				}
			)
		} else {
			this.setState(
				() => {
					return {
						error: ''
					}
				}
			)
			this.setState(
				(prevState) => {
					return {
						options:prevState.options.concat(option)
					};
				}
			)
		}
	}

	componentDidMount(){
		console.log("component mount");
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(
					() => {
						return {
							options: options
						}
					}
				)
			}
		} catch (e) {
			// do nothing
		}
	}

	componentDidUpdate(prevProps, prevState){
		console.log("component update");
		if(prevState.options.length !== this.state.options.length){
			localStorage.setItem('options', JSON.stringify(this.state.options));
		}
	}

	componentWillUnmount(){
		console.log("Component will unmount");
	}

	render(){

		let title="Indecision App!";
		let subtitle = "Put your life in the hands of the computer";
		
		return (
		  <div>
			<Header title={title} subtitle={subtitle}/>
			<Action options={this.state.options}/>
			<Options options={this.state.options} removeAll={this.removeAll} removeItem={this.removeItem}/>
			<AddOption formSubmit={this.formSubmit} error={this.state.error}/>
		   </div>
		);
	}
}

IndecisionApp.defaultProps =  {
	options: []
}
const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
}

Header.defaultProps = {
	title: 'some default text'
}

class Action extends React.Component {

	constructor(props){
		super(props);
		this.handlePick = this.handlePick.bind(this);
	}

	handlePick(){
		let random = Math.floor(Math.random() * this.props.options.length);
		let value = this.props.options[random];
		alert(value);
	}

	render(){
			console.log(this.props.options.length);
		return (
			<div>
				<button onClick={this.handlePick} disabled={!this.props.options.length > 0}>What should we do?</button>
			</div>
		);
	}
}

const Options = (props) => {
	return (
			<div>
				
				<ul>
					{
						props.options.map
						(
							(op) => <Option key={op} optionValue={op} removeItem={props.removeItem}/>
						)
					}
				</ul>
				<button onClick={props.removeAll}>
					Remove All
				</button>
			</div>
		);
}

const Option = (props) => {
	return (
				<div>
					<li>{props.optionValue} &nbsp; <button onClick={() => { props.removeItem(props.optionValue) }}>Remove</button></li>
				</div>
			);
}

const AddOption = (props) => {
	return (
			<div>
				{props.error && <p>{props.error}</p>}
				<form onSubmit={props.formSubmit}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>		
			</div>
		);
}

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot);

