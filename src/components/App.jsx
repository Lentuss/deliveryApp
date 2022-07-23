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
import Notification from './Notify';

/// ============================================================
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';

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

initializeApp(firebaseConfig);

/// =============================================================

class App extends Component {
  state = {
    currentPage: 'shop',
    menu: '',
    menuItems: [],
    cartItems: [],
    sum: 0,
    activeShop: '',
  };

  componentDidMount() {
    // this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.menu !== prevState.menu) {
      this.getData();
    }
    if (this.state.cartItems !== prevState.cartItems) {
      this.setState({ sum: this.getSum() });
      this.checkActive();
    }
  }

  checkActive = shop => {
    if (this.state.cartItems.length !== 0 && this.state.activeShop !== shop) {
      return true;
    } else {
      return false;
    }
  };

  getData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${this.state.menu}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log('No data available');
        }
      })
      .then(res => {
        this.setMenuItems(res);
      })
      .catch(error => {
        console.error(error);
      });
  };
  getCurrentPage = page => {
    this.setState({ currentPage: page });
  };

  setMenu = name => {
    this.setState({ activeShop: name });
    switch (name) {
      case 'BaBurger':
        this.setState({ menu: 'burgers' });
        break;
      case 'Sweet July':
        this.setState({ menu: 'cakes' });
        break;
      case 'Roll`n`Roll':
        this.setState({ menu: 'rolls' });
        break;
      case 'Home Foods':
        this.setState({ menu: 'homeFood' });
        break;
      case 'Pizza Mania':
        this.setState({ menu: 'pizzas' });
        break;
      default:
        break;
    }
  };

  setMenuItems = data => {
    this.setState({
      menuItems: data.map(item => ({ id: nanoid(), ...item })),
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
    const { cartItems } = this.state;
    const { name, email, number, address } = data;
    this.writeUserData(nanoid(), name, email, number, address);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.setState({ cartItems: [] });
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
              <ShopList
                onClick={this.setMenu}
                names={shopsList}
                isDisabled={this.checkActive}
              />
            </SideBar>
            {menuItems.length !== 0 ? (
              <ItemsList items={menuItems} addToCart={this.addToCart} />
            ) : (
              <Notification message={'Choose the restoraunt, please'} />
            )}
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
                <Notification message={'Your cart is empty'} />
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
