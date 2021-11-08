<template>
  <div class="is-preload">
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <a href="" class="logo"
              ><strong style="text-transform: uppercase">Order</strong></a
            >
          </header>

          <div class="table-wrapper" style="margin: 25px">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Date<br />Time</th>
                  <th>Item:Qty(kg)</th>
                  <th>Order Price</th>
                  <th>
                    User<br />
                    (Mobile No.)
                  </th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody style="text-align: left">
                <tr v-for="(o, i) in od" :key="i">
                  <td>{{ i }}</td>
                  <td>
                    {{ new Date(o.date.toDate()).getDate() }}/{{
                      new Date(o.date.toDate()).getMonth() + 1
                    }}/{{ new Date(o.date.toDate()).getFullYear() }}<br />
                    {{ new Date(o.date.toDate()).getHours() }}:{{
                      new Date(o.date.toDate()).getMinutes()
                    }}:{{ new Date(o.date.toDate()).getSeconds() }}
                  </td>
                  <td>
                    <ul style="list-style-type: none">
                      <li v-for="(it, i) in o.item" :key="i">
                        <a>{{ i }}</a> : {{ it }}
                      </li>
                    </ul>
                  </td>
                  <td>{{ o.price }}</td>
                  <td><a>{{ o.user }}</a></td>
                  <td>{{ o.status }}</td>
                  <td style="display: flex; justify-content: space-around">
                    
                      <a @click="updateOrderStatus(i,'accepted')" v-if="o.status === 'placed'"
                        ><i class="fa fa-check" aria-hidden="true"></i
                      ></a>
                      <a @click="updateOrderStatus(i,'delivered')" v-if="o.status === 'out-for-deliver'"
                        ><i class="fa fa-check-square" aria-hidden="true"></i
                      ></a>
                      <a @click="updateOrderStatus(i,'out-for-deliver')" v-if="o.status === 'accepted'"
                        ><i class="fa fa-truck" aria-hidden="true"></i
                      ></a>
                      <a v-if="o.status != 'delivered'" @click="updateOrderStatus(i,'cancel')"> <i class="fa fa-trash" aria-hidden="true"></i></a>
                  
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
  name: "Order",
  components: {
    SideBar,
  },
  data() {
    return {
      od: {},
    };
  },
  mounted() {
    db.order.get().then((d) => {
      d.forEach((d) => {
        this.od[d.id] = d.data();
      });
    });
    this.$forceUpdate();
  },
  methods: {
    updateOrderStatus(id, status) {
      db.order.doc(id).update({
        status: status,
      }).then(()=>{
       window.location.reload();
      });
    },
  },
};
</script>
