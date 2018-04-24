import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component={React.DOM.input} type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component={React.DOM.input} type="text"/>
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component={React.DOM.input} type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
Contact = reduxForm({
  form: 'contact' // a unique name for this form
})(Contact);

export default Contact;