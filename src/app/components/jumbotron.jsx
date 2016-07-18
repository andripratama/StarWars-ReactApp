var React = require('react');
var Bootstrap = require('react-bootstrap');

var Panel = Bootstrap.Panel;
var Jumbotron = Bootstrap.Jumbotron;
var Div = Bootstrap.Div;
var People = require('./people.jsx');
var request = require('request');

var Jumbotron = React.createClass({
	
	loadData: function () {
        $.ajax({
            url: 'http://swapi.co/api/people/',
            dataType: 'json',
            success: function (people) {
                this.setState({people: people})
				
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(xhr);
                console.log(status);
                console.log(err);
            }.bind(this)
        });
    },
    getInitialState: function () {
        return { people: [] }
    },
    componentDidMount: function () {
        this.loadData();
    },
	render: function() {
		return (
			<div className="list-group">
				{this.state.data.map(function(people){
                    return (
                        <People
                            name={people.name}
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