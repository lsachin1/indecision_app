'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.removeAll = _this.removeAll.bind(_this);
		_this.formSubmit = _this.formSubmit.bind(_this);
		_this.removeItem = _this.removeItem.bind(_this);
		_this.state = {
			error: undefined,
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'removeAll',
		value: function removeAll() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'removeItem',
		value: function removeItem(args) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						if (option !== args) return true;
					})
				};
			});
		}
	}, {
		key: 'formSubmit',
		value: function formSubmit(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			e.target.elements.option.value = '';

			if (!option) {
				this.setState(function () {
					return {
						error: 'Please enter the option to add'
					};
				});
			} else if (this.state.options.indexOf(option) > -1) {
				this.setState(function () {
					return {
						error: 'Entry is already exist in the database!!'
					};
				});
			} else {
				this.setState(function () {
					return {
						error: ''
					};
				});
				this.setState(function (prevState) {
					return {
						options: prevState.options.concat(option)
					};
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log("component mount");
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);
				if (options) {
					this.setState(function () {
						return {
							options: options
						};
					});
				}
			} catch (e) {
				// do nothing
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			console.log("component update");
			if (prevState.options.length !== this.state.options.length) {
				localStorage.setItem('options', JSON.stringify(this.state.options));
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log("Component will unmount");
		}
	}, {
		key: 'render',
		value: function render() {

			var title = "Indecision App!";
			var subtitle = "Put your life in the hands of the computer";

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, { options: this.state.options }),
				React.createElement(Options, { options: this.state.options, removeAll: this.removeAll, removeItem: this.removeItem }),
				React.createElement(AddOption, { formSubmit: this.formSubmit, error: this.state.error })
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
	options: []
};
var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: 'some default text'
};

var Action = function (_React$Component2) {
	_inherits(Action, _React$Component2);

	function Action(props) {
		_classCallCheck(this, Action);

		var _this2 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

		_this2.handlePick = _this2.handlePick.bind(_this2);
		return _this2;
	}

	_createClass(Action, [{
		key: 'handlePick',
		value: function handlePick() {
			var random = Math.floor(Math.random() * this.props.options.length);
			var value = this.props.options[random];
			alert(value);
		}
	}, {
		key: 'render',
		value: function render() {
			console.log(this.props.options.length);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.handlePick, disabled: !this.props.options.length > 0 },
					'What should we do?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'ul',
			null,
			props.options.map(function (op) {
				return React.createElement(Option, { key: op, optionValue: op, removeItem: props.removeItem });
			})
		),
		React.createElement(
			'button',
			{ onClick: props.removeAll },
			'Remove All'
		)
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'li',
			null,
			props.optionValue,
			' \xA0 ',
			React.createElement(
				'button',
				{ onClick: function onClick() {
						props.removeItem(props.optionValue);
					} },
				'Remove'
			)
		)
	);
};

var AddOption = function AddOption(props) {
	return React.createElement(
		'div',
		null,
		props.error && React.createElement(
			'p',
			null,
			props.error
		),
		React.createElement(
			'form',
			{ onSubmit: props.formSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);
};

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
