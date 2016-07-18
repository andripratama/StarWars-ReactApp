var React = require('react');
var Bootstrap = require('react-bootstrap');

var Panel = Bootstrap.Panel;
var Jumbotron = Bootstrap.Jumbotron;
var Div = Bootstrap.Div;
var People = require('./people.jsx');
var request = require('request');

var Jumbotron = React.createClass({
     getInitialState: function() {
        return {
            data: [
            {
            name: 'TrackMaven',
            height: 'Software Maven',
            mass: 'Washington, DC, USA',
            hair_color: 'Angular.js, Django, ElasticSearch',
            skin_color: '4 April 2015',
            eye_color: 'asdas',
            birth_year: 'tes',
            gender: 'Engineer'
            },{
            name: 'TrackMaven',
            height: 'Software Maven',
            mass: 'Washington, DC, USA',
            hair_color: 'Angular.js, Django, ElasticSearch',
            skin_color: '4 April 2015',
            eye_color: 'asdas',
            birth_year: 'tes',
            gender: 'Engineer'
            }
            ]
        };
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