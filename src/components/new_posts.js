import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions';

class PostsNew extends Component{

    renderField(field){

        const className=`form-group ${field.meta.touched && field.meta.error? 'has-danger': ''} `;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <br/> <div className="text-help" >
                    {field.meta.touched? field.meta.error : ''}
                </div>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    handleSubmit(values){
        
         this.props.createPost(values, ()=>{
            this.props.history.push('/');
        });
    }

    render(){
        const {handleSubmit} = this.props;
        return(
             <form onSubmit={handleSubmit(this.handleSubmit.bind(this))} >
             
                <Field label="Name of the Post" name="title" component={this.renderField} />
                <Field label="Categories" name="categories" component={this.renderField} />
                <Field label="content" name="content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            
        );
    }
}


function validate(values){
    const errors={};
    if(!values.title){
        errors.title="Enter some title";
    }
    
    if(!values.categories){
        errors.categories="Enter some categories";
    }
    if(!values.content){
        errors.content="Enter some content";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);