import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {

    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  // field.meta.touched a build in attrubute from redux-form that
  // checks if a field has been focused on and THEN focused off
  //
  // field.meta.error is a built in attribute of redux from that
  // gets the error from the validate function. The Field input
  // ties into the validate function via the name attribute. They must
  // match in order for Validate to connect the Field to redux-form.


  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {

    // handleSubmit is a function passed by reduxForm via props to PostsNew.
    const { handleSubmit } = this.props;

    return(

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Post Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Please enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Please enter some catagories'
  }

  if (!values.content) {
    errors.content = 'Please enter some content'
  }

  // If errors is empty, form will submit.
  // if errors has any property, redux-form assumes form is invalid.
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
