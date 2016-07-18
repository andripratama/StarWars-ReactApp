var React = require('react');

module.exports = React.createClass({

    render: function() {
        return (
            <a href="#" className="list-group-item">
                <h4 class="list-group-item-heading listing-company">
                    <span className="listing-position-name">{ this.props.name }</span>
                    
                </h4>
                <p className="list-group-item-text">
                <small className="listing-company-name">Height: { this.props.height }, </small>
                    <small className="listing-location">Mass: { this.props.mass }</small>
                    <span className="listing-job-type">Looking for: { this.props.hair_color }</span>
                </p>
                <p className="list-group-item-text"> 
                    <span className="listing-job-type">Hair-Color: { this.props.hair_color }, </span>
                    <span className="listing-posted">Skin-Color: { this.props.skin_color }, </span>
                    <span className="listing-company-category">Eye-Color: { this.props.eye_color }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="listing-company-category">Birth: { this.props.birth_year }</span>
                </p>
                 <p className="list-group-item-text">
                    <span className="listing-company-category">Gender: { this.props.gender }</span>
                </p>
            </a>
        );
    }
});