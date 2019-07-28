console.log("test");

const appObject = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of the computer!!',
	options: ['One', 'Two']
}

let onFormSubmit = (e) => {
	e.preventDefault();
	let optionValue = e.target.elements.option.value;
	if(optionValue){
		appObject.options.push(optionValue);
		e.target.elements.option.value='';
		renderProject();
	}
}

let removeAll = (e) => {
	e.preventDefault();
	appObject.options = [];
	renderProject();

}

let pickOption = () => {
	const randomNum = Math.floor(Math.random() * appObject.options.length);
	const option = appObject.options[randomNum];
	alert(option);
}
const appRoot = document.getElementById('app');

const renderProject = () => {
	const template = (
				<div>
					<h1>Title: {appObject.title}</h1>
					{appObject.subtitle && <p>SubTitle: {appObject.subtitle}</p>}
					<p>{ appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
					<button onClick={pickOption} disabled={appObject.options.length === 0 }>What should I do?</button>
					<button id="remove-option" value="Remove Option" onClick={removeAll}>Remove All</button>
					<ul>
					{
						appObject.options.map(
							(op) => {
								return <li key={op}>{op}</li>
							}
						)
					}
					</ul>
					<form onSubmit={onFormSubmit}>
						<input type="text" name="option" />
						<button id="add-option" value="Add option">Add Option</button>
						
					</form>

				</div>
	);

	ReactDOM.render(template, appRoot);

}

renderProject();