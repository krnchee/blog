import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderTitleField(field) {
    return(
      <div>
        <input
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return(
      <div>
        <form>
          <Field
            name='title'
            component={this.renderTitleField}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
