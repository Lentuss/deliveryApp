import React, { Component } from 'react';
import {
  ContactForm,
  FormLabel,
  LabelTitle,
  FormInput,
} from './CartForm.styled';

class CartForm extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    address: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      email: '',
      address: '',
    });
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <ContactForm
        name="addContactForm"
        autocomplete="on"
        id="contacts"
        onSubmit={this.handleSubmit}
      >
        <FormLabel>
          <LabelTitle>Name</LabelTitle>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            value={this.state.name}
            required
          />
        </FormLabel>
        <FormLabel>
          <LabelTitle>Email</LabelTitle>
          <FormInput
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Email may contain letters or digits,spaces, dashes, parentheses and must contain @. For example example23@mail.com"
            onChange={this.handleInput}
            value={this.state.email}
            required
          />
        </FormLabel>
        <FormLabel>
          <LabelTitle>Number</LabelTitle>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInput}
            value={this.state.number}
            // minlength="7"
            // maxlength="7"
            required
          />
        </FormLabel>
        <FormLabel>
          <LabelTitle>Address</LabelTitle>
          <FormInput
            type="text"
            name="address"
            pattern="^[a-zA-Zа-яА-Я-0-9]+((['.,/ -][a-zA-Zа-яА-Я-0-9 ])?[a-zA-Zа-яА-Я-0-9]*)*$"
            title="Adress may contain only letters, apostrophe, digits, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInput}
            value={this.state.address}
            required
          />
        </FormLabel>
      </ContactForm>
    );
  }
}
export default CartForm;
