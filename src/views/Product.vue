<template>
  <div class="is-preload">
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <a href="" class="logo"
              ><strong style="text-transform: uppercase">product</strong></a
            >
          </header>

          <div class="table-wrapper" style="margin: 25px">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Price (in rs)</th>
                  <th>Stock (in kg)</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody style="text-align: left">
                <tr v-for="(p, i) in prod" :key="i">
                  <td>{{ i }}</td>
                  <td>{{ p.name }}</td>
                  <td>{{ p.img }}</td>
                  <td>{{ p.cat }}</td>
                  <td>
                    <input
                      type="text"
                      inputmode="numeric"
                      v-model="prod[i].price"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      inputmode="numeric"
                      v-model="prod[i].stock"
                    />
                  </td>
                  <td>
                    <input type="button" value="update" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  </div>
</template>

<script >
import db from "../firebase.js";

import SideBar from "../component/SideBar.vue";
export default {
  name: "product",
  components: {
    SideBar,
  },
  data() {
    return { prod: {} };
  },
  mounted() {
    db.product
      .get()
      .then((d) => {
        d.forEach((d) => {
          this.prod[d.id] = d.data();
        });
      });
      this.$forceUpdate();
  },
};
</script>
