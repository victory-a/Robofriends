import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await data.json();
            this.setState({robots: users});
            
        } catch(error) {
            console.log('oops', error);
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobot} />
                    </Scroll>
                </div>
            );
    }
    
}

export default App;