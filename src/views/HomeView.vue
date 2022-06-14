<template>
  <div class="home">
    <div class="table-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <input
        v-model="search"
        type="text"
        name="search"
        id="seach"
        placeholder="Searching"
      />
      <TableComponent />
      <button @click="teste">teste</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableComponent from "@/components/TableComponent.vue";
import axios from "axios";
// import { formatDate } from "@/utils/formatDate";

export default {
  name: "HomeView",
  components: {
    TableComponent,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    getUsers() {
      axios.get("https://randomuser.me/api/?results=50").then((res) => {
        this.$store.commit("setUsers", res.data.results);
        console.log(this.users);
      });
    },
    teste() {
      this.$store.commit('setSearch', this.search)
    },
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  background-color: #f7f9fa;
  min-height: 90vh;
  padding-top: 40px;
}

.table-container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 60vw;
  height: 100%;
}

.table-container p {
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
}

.table-container input {
  font-size: 20px;
  color: #8d959b;
  padding: 10px;
  outline: none;
  border: 2px solid #cbd4db;
  border-radius: 5px;
}
</style>
