var React = require('react');
var Bootstrap = require('react-bootstrap');

var Panel = Bootstrap.Panel;
var Jumbotron = Bootstrap.Jumbotron;
var Div = Bootstrap.Div;
var Results = require('./people.jsx');
var request = require('request');
var HTTP = require('../parse/httpservice');
var swapi = require('swapi-node');

var Jumbotron = React.createClass({
     getInitialState: function() {
         return {results:[]};
     },
     componentDidMount: function() {
         HTTP.get('/people/')
         .then(function(data) {
             console.log("DATA: ", data);
             this.setState({results: data})
         }.bind(this));
     },

	render: function() {
        console.log("STATE : ",this.state);
    
		return (
            <div className="list-group">{
            this.state.results.map(function(people){
            return (
                <People name={people.name}
                            height={people.height}
                            mass={people.mass}
                            hair_color={people.hair_color}
                            skin_color={people.skin_color}
                            eye_color={people.eye_color}
                            birth_year={people.birth_year}
							gender={people.gender} 
                            />
                           )
                })}
            </div>
        );
    }
});

module.exports = Jumbotron;