import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi qui voluptatem ducimus nulla placeat voluptas laudantium delectus,
                    modi expedita velit quaerat laboriosam!
                    Aliquam quas voluptate quod, quos nam perspiciatis explicabo.
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;