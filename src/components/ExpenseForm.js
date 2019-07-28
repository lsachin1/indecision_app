import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { addExpense } from '../actions/expenses';

const now = moment();

export default class ExpenseForm extends React.Component {

	constructor(props){

		super(props);

		this.state = {
			description: props.expense ? props.expense.description : '',
			notes: props.expense ? props.expense.notes : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			focused: false,
			error: ''
		};

	}
	
	descriptionChange = (e) => {
		const description = e.target.value;
		this.setState({
			description
		})
	};

	onNoteChange = (e) => {
		const notes = e.target.value;
		//e.persist();
		this.setState({
			notes
		})
	};

	onAmountChange = (e) => {
		const amount = e.target.value;

		if(!amount || amount.toString().match(/^\d{1,}(\.\d{0,2})?$/)){
			this.setState({
				amount
			})
		}
	};

	onDateChange = (createdAt) => {
		if(createdAt){
			this.setState({
				createdAt
			})
		}
		
	}

	onFocusChange = ({ focused}) => {
		this.setState({
			focused
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.state.amount = this.state.amount || 0;
		if(!this.state.description){
			this.setState({
				error: 'Please enter description'
			})
		}else{
			this.setState({
				error: ''
			})

			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				notes: this.state.notes
			});
			//console.log('xxxx');
		}
	}

	render() {
		return (
			<div>
			    {this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input 
						type="text"
						placeholder="description"
						autoFocus
						value={this.state.description}
						onChange={this.descriptionChange}
					/ >
					<input 
						type="number"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					 />
					 <SingleDatePicker 
					 	date={this.state.createdAt}
					 	onDateChange={this.onDateChange}
					 	focused={this.state.focused}
					 	onFocusChange={this.onFocusChange}
					 	numberOfMonths={1}
					 	isOutsideRange={() => false}
					 />
					 <textarea
					 	placeholder="Add a note for the expense"
					 	value={this.state.notes}
					 	onChange={this.onNoteChange}
					 >
					 </textarea>
					 <button>{this.state.description ? 'Update Expense' : 'Add Expense'}</button>
					 
				</form>
			</div>
		)
	}
}