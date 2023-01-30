import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import axios from 'axios';

const store = createStore({
  // local state
  state() {
    return {
      counter: 0,
      history: [],
    }
  },
  // methodes used in components
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    subtractToCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter)
    },
    subtractRandomToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter)
    },
    resetCounter(state) {
      state.counter = 0;
    }
  },
  actions: {
    // context is access to the store/mutations and has specific methods like COMMIT
    async addRandomNumber (context) {
      let data = await axios.get("https://www.random.org/integers/?num=1&min=0&max=1000&col=1&base=10&format=plain&rnd=new");
      context.commit("addToCounter", data.data)
    },
    async minusRandomNumber (context) {
      let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=0&col=1&base=10&format=plain&rnd=new");
      context.commit("subtractRandomToCounter", data.data);
    }
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if(number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
