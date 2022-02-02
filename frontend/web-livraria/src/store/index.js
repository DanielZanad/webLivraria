import { createStore } from 'vuex';
import Product from './modules/products';
import User from './modules/user';

export default createStore({
  modules: {
    Product,
    User
  }
})
