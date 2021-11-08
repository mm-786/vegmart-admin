<template>
  <div class="is-preload">
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
         <header id="header">
						<div style="display: flex; justify-content: space-around; background-color:rgba(245, 106, 106,0.3); padding: 10px; border-radius: 15px;">
  <router-link to="/" style="color:white;padding: 5px; border-radius: 10px; font-weight: bold; background-color: rgba(245, 106, 106);">Dashboard</router-link>
  <router-link to="/order" style="color:white; padding: 5px; border-radius: 10px; font-weight: bold; background-color: rgba(245, 106, 106);">Order</router-link>
  <router-link to="/product" style="color:white; padding: 5px; border-radius: 10px; font-weight: bold; background-color: rgba(245, 106, 106);">Product</router-link>
  <router-link to="/user" style="color:white; padding: 5px; border-radius: 10px; font-weight: bold; background-color: rgba(245, 106, 106);">User</router-link>
  <router-link to="/login" style="color:white; padding: 5px; border-radius: 10px; font-weight: bold; background-color: rgba(245, 106, 106);">Logout</router-link>
 </div>
					</header>
					<header id="header" style="margin-top:-50px">
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
                  <th>Item:Qty(kg)*Price(rs)</th>
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
                        <abbr :title="getName(i)"><a>{{ i }}</a></abbr> : {{ it }}
                      </li>
                    </ul>
                  </td>
                  <td>{{ o.price }}</td>
                  <td><abbr :title="getName(o.user)"><a>{{ o.user }}</a></abbr></td>
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

    </div>
  </div>
</template>

<script >
import db from "../firebase.js";


export default {
  name: "Order",
  components: {
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
    getName(id){
      return window.localStorage.getItem(id)
    }
  },
};
</script>
<style scoped>

</style>