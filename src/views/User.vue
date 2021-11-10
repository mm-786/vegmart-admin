<template>
  <div class="is-preload">
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <div
              style="
                display: flex;
                justify-content: space-around;
                background-color: rgba(245, 106, 106, 0.3);
                padding: 10px;
                border-radius: 15px;
              "
            >
              <router-link
                to="/"
                style="
                 color: rgba(245, 106, 106);
                  padding: 5px;
                  border-radius: 10px;
                  font-weight: bold;
                "
                >Dashboard</router-link
              >
              <router-link
                to="/order"
                style="
                 color: rgba(245, 106, 106);
                  padding: 5px;
                  border-radius: 10px;
                  font-weight: bold;
                "
                >Order</router-link
              >
              <router-link
                to="/product"
                style="
                 color: rgba(245, 106, 106);
                  padding: 5px;
                  border-radius: 10px;
                  font-weight: bold;
                "
                >Product</router-link
              >
              <router-link
                to="/user"
                style="
                 color: rgba(245, 106, 106);
                  padding: 5px;
                  border-radius: 10px;
                  font-weight: bold;
                "
                >User</router-link
              >
              <router-link
                to="/login"
                style="
                 color: rgba(245, 106, 106);
                  padding: 5px;
                  border-radius: 10px;
                  font-weight: bold;
                "
                >Logout</router-link
              >
            </div>
          </header>
          <header id="header" style="margin-top: -50px">
            <a href="" class="logo"
              ><strong style="text-transform: uppercase">user</strong></a
            >
          </header>

          <div class="table-wrapper" style="margin: 25px">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>PIN code</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody style="text-align: left">
                <tr v-for="(u, i) in user" :key="i">
                  <td>{{ u.name }}</td>
                  <td>{{ u.gender }}</td>
                  <td>{{ u.mob }}</td>
                  <td>{{ u.email }}</td>
                  <td>{{ u.add.pin }}</td>
                  <td>{{ u.add.city }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";

export default {
  name: "user",
  components: {},
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    db.user
      .where("type", "!=", "admin")
      .get()
      .then((d) => {
        d.forEach((d) => {
          this.user[d.id] = d.data();
        });
      });
    this.$forceUpdate();
  },
};
</script>