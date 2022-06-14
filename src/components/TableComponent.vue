<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th width="28%">Name</th>
          <th width="24%">Gender</th>
          <th width="24%">Birth</th>
          <th width="24%">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filteredList" :key="index">
          <td>{{ user.name.first }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dob.date }}</td>
          <td>{{ user.name.first }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredList() {
      return this.$store.state.users.filter((user) => {
        let name = user.name.first;
        return name
          .toLowerCase()
          .includes(this.$store.state.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
.table {
  height: 50%;
}

.table table {
  border-collapse: collapse;
  width: 100%;
}

.table thead {
  background-color: #c3cfd9;
}

.table th {
  font-weight: bold;
}

.table th,
td {
  border: 2px solid #9eadba;
  padding: 1rem;
  text-align: center;
  font-size: 17px;
}
</style>
