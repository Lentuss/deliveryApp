import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { GlobalStyle } from './GlobalStyled';
import Navigation from './Navigation';
import MainContainer from './MainContainer';
import ItemsList from './ItemsList';
import ShopList from './ShopsList';
import SideBar from './Sidebar';
import CartForm from './CartForm';
import Cart from './Cart';
import Summary from './Summary';

import burgers from '../data/baBurger.json';
import homeFoods from '../data/homeFood.json';
import pizzas from '../data/pizzaMania.json';
import rolls from '../data/rollAndRoll.json';
import sweets from '../data/sweetJuly.json';

/// ============================================================
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDp7wpGZH4XoJ4X_7_69GNQaYTzi6onXrM',
  authDomain: 'deliveryapp-73c4e.firebaseapp.com',
  databaseURL:
    'https://deliveryapp-73c4e-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'deliveryapp-73c4e',
  storageBucket: 'deliveryapp-73c4e.appspot.com',
  messagingSenderId: '596734830143',
  appId: '1:596734830143:web:9b23a50c5741d5f700ba8a',
  measurementId: 'G-2F8FGV87FW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const database = getDatabase();
/// =============================================================

class App extends Component {
  state = {
    currentPage: 'shop',
    menu: burgers,
    menuItems: [],
    cartItems: [],
    sum: null,
  };

  componentDidMount() {
    this.setMenuItems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.menu !== prevState.menu) {
      this.setMenuItems();
    }
    if (this.state.cartItems !== prevState.cartItems) {
      this.setState({ sum: this.getSum() });
    }
  }

  getCurrentPage = page => {
    this.setState({ currentPage: page });
  };

  setMenu = name => {
    switch (name) {
      case 'BaBurger':
        this.setState({ menu: burgers });
        break;
      case 'Sweet July':
        this.setState({ menu: sweets });
        break;
      case 'Roll`n`Roll':
        this.setState({ menu: rolls });
        break;
      case 'Home Foods':
        this.setState({ menu: homeFoods });
        break;
      case 'Pizza Mania':
        this.setState({ menu: pizzas });
        break;
      default:
        break;
    }
  };

  setMenuItems = () => {
    this.setState({
      menuItems: this.state.menu.map(item => ({ id: nanoid(), ...item })),
    });
  };

  addToCart = (id, name, price, url) => {
    const { cartItems } = this.state;
    if (cartItems.some(item => item.id === id)) {
      Notify.info('You can change the quantity in the cart');
      this.setState({ currentPage: 'cart' });
    } else {
      Notify.success('Added to cart');
      this.setState(prev => ({
        cartItems: [...prev.cartItems, { id, name, price, url, quantity: 1 }],
      }));
    }
  };

  handleChangeQuantity = (id, value) => {
    if (value > 0) {
      this.setState(prev => ({
        cartItems: prev.cartItems.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: value,
              }
            : item
        ),
      }));
    } else {
      Notify.info('Deleted from cart');
      this.setState(prev => ({
        cartItems: prev.cartItems.filter(item => item.id !== id),
      }));
      return;
    }
  };
  handleSubmit = data => {
    const { name, email, number, address } = data;
    this.writeUserData(nanoid(), name, email, number, address);
    localStorage.setItem('user contacts', JSON.stringify(data));
  };

  getSum = () => {
    const { cartItems } = this.state;
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  writeUserData = (userId, name, email, number, address) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      number: number,
      address: address,
    });
  };

  render() {
    const shopsList = [
      //////////////////////////////////////////////////////////////////////
      'BaBurger',
      'Sweet July',
      'Roll`n`Roll',
      'Home Foods',
      'Pizza Mania',
    ];
    const { currentPage, cartItems, menuItems, sum } = this.state;
    return (
      <>
        <GlobalStyle />
        <Navigation onClick={this.getCurrentPage} />
        {currentPage === 'shop' && (
          <MainContainer>
            <SideBar>
              <ShopList onClick={this.setMenu} names={shopsList} />
            </SideBar>

            <ItemsList items={menuItems} addToCart={this.addToCart} />
          </MainContainer>
        )}
        {currentPage === 'cart' && (
          <>
            <MainContainer>
              <CartForm onSubmit={this.handleSubmit} />
              {cartItems.length !== 0 && (
                <Cart
                  addQuantity={this.handleChangeQuantity}
                  items={cartItems}
                />
              )}

              {cartItems.length === 0 && (
                <div>Your cart is empty</div> ////////////////////////////////////////////////////////////////////////////////
              )}
            </MainContainer>
            <Summary sum={sum}></Summary>
          </>
        )}
      </>
    );
  }
}
export default App;
