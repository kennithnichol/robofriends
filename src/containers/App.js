import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {setSearchField} from '../actions';
import './App.css';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => {
			dispatch(setSearchField(event.target.value))
		}
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }))
	}

	render() {
		const { robots } = this.state;
		const { searchField } = this.props;
		const filteredRobots = robots.filter(robot => (
			robot.name.toLowerCase().includes(searchField.toLowerCase())
		))

		return !robots.length ?
			( <div className='tc'><h1>Loading</h1></div> ) :
			(
			<div className="tc">
				<h1 className="f1">Robot Friends</h1>
				<SearchBox
					searchChange={this.props.onSearchChange}
					searchFilter={this.searchField}
				/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
