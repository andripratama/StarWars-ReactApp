var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navigation = require('./navigation.jsx');
var Jumbotron = require('./jumbotron.jsx');
var List = require('./List.jsx');


var Main = React.createClass({

    render: function () {
        return (
            <div>

                <Navigation projectName="React-Starwars" home="home" />
               
                <div className="container">
                    <div className="starter-template">
                        
                        <Jumbotron />
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Main;