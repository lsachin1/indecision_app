import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { ExpenseDashBoardPage } from '../components/ExpenseHomePage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage  from '../components/AddExpensePage';
import { helpExpensePage } from '../components/helpExpensePage';
import { pageNotFound } from '../components/pageNotFound';
import { IndecisionApp } from '../components/IndecisionApp';
import Timer from '../components/Timer';

const Header = () => {
	return (
		<header>
			<h1>Expensify</h1>
			<ul>
				<li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
				<li><NavLink to="/create">Add Expense</NavLink></li>
				<li><NavLink to="/indecision-app">Indecision App</NavLink></li>
				<li><NavLink to="/help">Help</NavLink></li>
				<li><NavLink to="/timer">Timer</NavLink></li>
			</ul>
		</header>
	)
}

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={ExpenseDashBoardPage} exact={true} />
					<Route path="/create" component={AddExpensePage}  />
					<Route path="/timer" component={Timer}  />
					<Route path="/edit/:id" component={EditExpensePage} />
					<Route path="/help" component={helpExpensePage} />
					<Route path="/indecision-app" component={IndecisionApp} />
					<Route path="/*" component={pageNotFound} exact={true}/>
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default AppRouter;