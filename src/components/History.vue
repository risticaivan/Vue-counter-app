<template>
  <div class="container-history">
    <h3> History </h3>
    <div class="flex">
      <p 
        v-for="(number, index) in history" 
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
      {{ number }}
      </p>
    </div>
    <input 
      class="input-field"
      type="number" 
      placeholder="Search by index"
      v-model="value"
    >
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data(){
    return {
      value: 0
    }
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  }
}
</script>

<style>
.container-history {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 40px;
}

.flex {
  background-color: rgb(213, 255, 238);
  display: flex;
  text-align: center;
  widows: 25rem;
  margin: 20px auto;
  justify-content: center;
  flex-wrap: wrap;
}

div .flex p {
margin: 10px;
}

.bold {
  font-weight: 700;
  color: #d15217;
}

.input-field{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-decoration: none;
  border: unset;
  background-color: #e0e0e0;
  border-radius: 5px;
}
</style>