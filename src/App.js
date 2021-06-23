import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert'
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Posts from './components/Posts';
import Acction from './components/Acction';
import About from './components/About';
import Menu from './components/Menu';
import Test from './components/Test'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/Post';
import Home from './components/Home';
import Men from './components/Men';
import Addpost from './components/Addpost';
import Main from './components/Main';
import Human from './components/Human';
import List from './components/List';
import Title from './components/Poststitle';
import Title1 from './components/Poststitle/index1';
import Homepost from './components/Homepost';
import Contact from './components/Contact';
import Filter from './components/Filter';
import Feedback from './components/Feedback';
import Cart from './components/Cart';
import PostFilter from './components/PostFilter';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const API = 'http://localhost:1337/posts';
  //
  const [posts, setPosts] = useState([]);

  //

  useEffect(() => {
    fetch(API).then(response => response.json()).then(data => setPosts(data));
  }, []);


  // const handleFilterChange = (newFilter) => {
  //   console.log('new:', newFilter);
  //   setPosts({
  //     ...posts,
  //     title_like: newFilter.searchTerm,
  //   })
  // }

  const onSearch = (search) => {
    fetch(`${API}?name_containss=${search}`).then(response => response.json()).then(data => {
      posts.filter(posts => posts.name === search);
      setPosts(data)
    });
  }
  const localStoragePost = JSON.parse(localStorage.getItem('cart'))

  const [cart, setCart] = useState([]);
  const newCart = [...cart];
  const onremoveCart = (cartID) => {
    console.log(cartID)
    setCart(
      cart.filter((Cart) => Cart.id !== cartID)
    )
  };
  const onAddToCart = (productCart) => {
    let itemCart = newCart.find((item) => productCart.id === item.id);

    if (itemCart) {
      itemCart.quantity++;
    } else {
      itemCart = {
        ...productCart,
        quantity: 1,
      }
      newCart.push(itemCart);
    }
    setCart([
      ...newCart]);
  }

  const onGetQuantity = (product, amount) => {
    console.log(amount)
    const newCart = [...cart];
    newCart.find(
      ((item) => product.id === item.id)).quantity = amount;
    setCart(newCart);
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, []);

  const [username, setUsername] = useState("")
  const getUser = (user) => {
    setUsername(user.username);
  }

  // const onSearch = (search) => {
  //   fetch(`${API}?title_containss=${search}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       product.filter(product => product.tilte === search);
  //       setProduct(data)
  //       console.log(data)
  //     });
  // }


  //
  // const onDeletePost = (id) => {
  //   fetch(`${API}/${id}`, {
  //     method: 'DELETE'
  //   }
  //   ).then(response => response.json()).then(data => swal('Ok', 'Da xoa thanh cong', 'success'))
  //     .catch(error => swal('!', 'Failed', 'error'));

  //   const newPosts = posts.filter(post => post.id !== id); // sinh mảng mới không bao gồm ID vừa click
  //   setPosts(newPosts)
  // }
  //
  // const onAddPost = (post) => {
  //   fetch(API, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(post)
  //   })
  //     .then(response => response.json).then(data => { swal("Good job", "dc b oi", "success") })
  //     .catch((Error) => {
  //       swal("!", "Dc b oi", "error")
  //     })
  //   setPosts([
  //     ...posts,
  //     post
  //   ])
  // }
  const getValue = (a) => {
    fetch(`${API}?categoryID=${a}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        console.log(data)
      }, console.log(posts));
  }

  const priceUp = () => {
    console.log('asas')
    fetch(`${API}?_sort=price:ASC`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        console.log(data)
      });
  }

  const priceDown = () => {
    fetch(`${API}?_sort=price:DESC`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        console.log(data)
      });
  }

  return (
    <div>
      <Router>
        <Header outCart={cart} />
        <div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Acction />
            <Homepost posts={posts} />
            {/* <Main /> */}
            <Home />
          </Route>
          <Route exact path='/girl'>
            {/* <Filter /> */}
            <Posts posts={posts} onSearch={onSearch} priceUp={priceUp} priceDown={priceDown} addtoCart={onAddToCart} getValue={getValue} />
          </Route>
          {/* <Route exact path='/action'>
            <Acction />
          </Route> */}
          <Route exact path='/about'>
            <List />
            <About />
          </Route>
          <Route exact path='/men'>
            <Men posts={posts} onSearch={onSearch} />
          </Route>
          <Route exact path='/feedback'>
            <Feedback />
          </Route>
          <Route exact path='/posts/:id'>
            <Title addtoCart={onAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart outCart={cart} getQuantity={onGetQuantity} removeCart={onremoveCart} />
          </Route>
          {/* <Route exact path='/add'>
            <Addpost onAdd={onAddPost} />
          </Route> */}
          <Route exact path='/contact'>
            <Contact />
            <Test />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route path='/login'>
            <Login getUSer={getUser} />
          </Route>
        </Switch>
        {/* <Acction />
        <Posts posts={posts} deletePost={onDeletePost} />
        <About /> */}
        <Footer />
      </Router>

    </div>
  );
}

export default App;
