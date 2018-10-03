import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfilter: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfilter: event.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => (
			robot.name.toLowerCase().includes(this.state.searchfilter.toLowerCase())
		))

		if (this.state.robots.length === 0) {
			return <div className='tc'><h1>Loading</h1></div>;
		}

		return (
			<div className="tc">
				<h1 className="f1">Robot Friends</h1>
				<SearchBox
					searchChange={this.onSearchChange}
					searchFilter={this.searchfilter}
				/>
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
