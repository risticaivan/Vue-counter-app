<template>
  <div>
    <h1> Vuex Counter </h1>
    <h1 class="counter">{{ counter }}</h1>
    <button
    	v-on:click="subtractToCounter(parseInt(value))" class="minus-btn" > - </button
    >
    <input
    	type="number"
    	v-model="value"
      class="input-field"
    />
    <button
    	v-on:click="addToCounter(parseInt(value))"> + </button
    >
    <div>
      <button 
        class="random-number-btn" 
        v-on:click="addRandomNumber"
      > 
        Add Random Number 
      </button>
    </div>
    <div>
      <button 
        class="random-number-btn minus-btn"
        v-on:click="minusRandomNumber"
      > 
        Minus Random Number 
      </button>
    </div>
    <div>
      <button
        class="random-number-btn" 
        style="background-color: #00d4ff"
        v-on:click="resetCounter"
      >
        Reset Random Number
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  // local state
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "subtractToCounter", "resetCounter"]),
    ...mapActions(["addRandomNumber", "minusRandomNumber", "minusRandomNumber"]),
  },
};
</script>

<style>
.input-field{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-decoration: none;
  border: unset;
  background-color: #e0e0e0;
  border-radius: 5px;
}

.counter {
  font-size: 4rem;
}

button {
  border-radius: 30%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 900;
  cursor: pointer;
  color: white;
  background-color: #41b883;
}

.random-number-btn {
  width: 200px;
  color: white;
  background-color: #41b883;
  padding: 0 20px;
  font-weight: 500;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.minus-btn{
  background-color: rgb(209, 82, 23);
}

input {
  margin: 0 5px;
  padding: 0.4rem;
  text-align: center;
}
</style>