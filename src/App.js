import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfilter: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfilter: event.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => (
			robot.name.toLowerCase().includes(this.state.searchfilter.toLowerCase())
		))

		return (
			<div className="tc">
				<h1>Robot Friends</h1>
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
