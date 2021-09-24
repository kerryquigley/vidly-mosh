import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class MovieForm extends Form {
    state = {
        data: {title: "", genre: "", numberInStock: 0, rate: 0}, // needs to be initialized as it's 'conrtrolled'
        errors: {}
    };

    schema = {
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().label("Number in Stock"),
        rate: Joi.number().required().label("Rate")
    }


    doSubmit = () => {
        console.log ('submitted');

    }

 
    render() { 

       // const { data, errors } = this.state;

        return (
        <div>
            <h1>Movie Form</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderInput('genre', 'Genre')}            
                {this.renderInput('numberInStock', 'Number In Stock')}
                {this.renderInput('rate', 'Rate')}
                {this.renderButton('Save')}
     
            </form>
        </div>  );
    }
}
 
export default MovieForm;