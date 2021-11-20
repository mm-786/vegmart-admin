<template>
  <div class="is-preload">
    <div v-if="!print" id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            
          </header>
          <header id="header" style="margin-top: -50px; display: grid; ">
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
                
                border-radius: 10px;
                font-weight: bold;
              "
              >Dashboard</router-link
            >
            <router-link
              to="/order"
              style="
                color: rgba(245, 106, 106);
                
                border-radius: 10px;
                font-weight: bold;
              "
              >Order</router-link
            >
            <router-link
              to="/product"
              style="
                color: rgba(245, 106, 106);
                
                border-radius: 10px;
                font-weight: bold;
              "
              >Product</router-link
            >
            <router-link
              to="/user"
              style="
                color: rgba(245, 106, 106);
                
                border-radius: 10px;
                font-weight: bold;
              "
              >User</router-link
            >
            <router-link
              to="/login"
              style="
                color: rgba(245, 106, 106);
                
                border-radius: 10px;
                font-weight: bold;
              "
              >Logout</router-link
            >
          </div>
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
                  <td><abbr @click="printOrderSlip(i,o.user)" title="Click to Print Order Slip"><a>{{ i }}</a></abbr>
                  </td>
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

                    <a @click="updateOrderStatus(i,'accepted');" v-if="o.status === 'placed'"><i class="fa fa-check"
                        aria-hidden="true"></i></a>
                    <a @click="updateOrderStatus(i,'delivered')" v-if="o.status === 'out-for-deliver'"><i
                        class="fa fa-check-square" aria-hidden="true"></i></a>
                    <a @click="updateOrderStatus(i,'out-for-deliver')" v-if="o.status === 'accepted'"><i
                        class="fa fa-truck" aria-hidden="true"></i></a>
                    <a v-if="o.status != 'delivered'" @click="updateOrderStatus(i,'cancel')"> <i class="fa fa-trash"
                        aria-hidden="true"></i></a>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    <!--  -->

    <div v-if="print" style="text-align: justify;">
      <hr>
      <div style="display: flex; justify-content: space-between;">
        <h3>{{orderSlip.orderID}}</h3>
        <h5>Order Date - {{orderSlip.date}}</h5>
      </div>
      <hr>
      <div style="display: flex; justify-content: space-between;">
        <div>
          <h5>Billing And Shipping Address</h5>
          {{orderSlip.name}}<br />
          {{orderSlip.add.street}},<br />
          {{orderSlip.add.addessLine}},<br />
          {{orderSlip.add.landmark}},<br />
          {{orderSlip.add.city}}({{orderSlip.add.state}})-{{orderSlip.add.pin}}<br />
        </div>
        <div style="background-color: black; width: 1px;"></div>
        <div>
          <h5>Seller Address</h5>
          <b>Veg Mart</b><br />
          Panchmukha Hanuman Street,<br />
          Near Waniyawad Circle ,<br />
          Bhuj(GUJ)-370 001<br />
          +91 91069 42548
        </div>
      </div>
      <hr>
        <table class="alt">
          <tr>
            <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              Qty.(kg)
            </th>
            <th>
              Price(rs)
            </th>
            <th>
              Total
            </th>
          </tr>
          <tr v-for="it,i in orderSlip.item" :key="i">
            <td>
              {{i}}
            </td>
            <td>
              {{getName(i)}}
            </td>
            <td>
              {{it.split('*')[0]}}
            </td>
            <td>
              {{it.split('*')[1]}}
            </td>
            <td>
              {{it.split('*')[1]*it.split('*')[0]}}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <th>{{orderSlip.ttl}}</th>
          </tr>
        </table>
      <hr>
    </div>

    <!--  -->
  </div>
</template>

<script lang="js">
  import db from "../firebase.js";


  export default {
    name: "Order",
    components: {

    },
    data() {
      return {
        od: {},
        orderSlip: {
          orderID: '',
          name: '',
          date: '',
          item: {},
          add: {},
          email: '',
          mob: '',
          ttl: ''
        },
        print: false,
        margins: {}
      }
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
        }).then(() => {
          window.location.reload();
        });
      },
      getName(id) {
        return window.localStorage.getItem(id)
      },
      printOrderSlip(oId, uId) {
        this.print = true
        db.order.doc(oId).get().then(d => {
          this.orderSlip.orderID = oId;
          this.orderSlip.date = new Date(d.data().date.seconds * 1000).toLocaleString()
          this.orderSlip.item = d.data().item
          this.orderSlip.ttl = d.data().price
        })
        db.user.doc(uId).get().then(d => {
          this.orderSlip.name = d.data().name;
          this.orderSlip.add = d.data().add;
          this.orderSlip.mob = d.data().mob;
          this.orderSlip.email = d.data().email;
        })
        setTimeout(() => {
          window.print();
        }, 1000);
        setTimeout(() => {
          this.print = false
        }, 3000);

      },

    },
  };
</script>
<style scoped>

</style>