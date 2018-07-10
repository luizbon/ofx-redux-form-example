import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './logo.svg';
import './App.css';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const lastNameRequired = (value, allValues) => {
  if(allValues.firstName) {
    return undefined;
  }

  return required(value);
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class App extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <Field
                  name="firstName"
                  component={renderField}
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  validate={required}
                />
                <Field
                  name="lastName"
                  component={renderField}
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  validate={lastNameRequired}
                />
              <input type="submit" value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
  onSubmit: () => alert("Submit"),
  validate: (allValues) => {
    const errors = {
      firstName: allValues.firstName ? undefined : 'Wrong',
      lastName: 'Wrong 2'
    };
    return errors;
  }
})(App)
