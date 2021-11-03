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
                  <th>Date<br/>Time</th>
                  <th>Item:Qty(kg)</th>
                  <th>Order Price</th>
                  <th>User<br/>
                  (Mobile No.)</th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody style="text-align: left">
                <tr v-for="o,i in od" :key="i">
                  <td>{{i}}</td>
                  <td>{{new Date(o.date.toDate()).getDate()}}/{{new Date(o.date.toDate()).getMonth()+1}}/{{new Date(o.date.toDate()).getFullYear()}}<br/>
                    {{new Date(o.date.toDate()).getHours()}}:{{new Date(o.date.toDate()).getMinutes()}}:{{new Date(o.date.toDate()).getSeconds()}}
                  </td>
                  <td><ul style="list-style-type:none;"> 
                        <li v-for="it,i in o.item" :key="i">{{i}} : {{it}}</li>
                    </ul></td>
                  <td>{{o.price}}</td>
                  <td>{{o.user}}</td>
                  <td>{{o.status}}</td>
                  <td style="display: flex; justify-content: space-around;">
                   <div><i class="fa fa-check" aria-hidden="true"></i><br>
                   <i class="fa fa-check-square" aria-hidden="true"></i></div>
                  <div> <i class="fa fa-truck" aria-hidden="true"></i><br>
                   <i class="fa fa-trash" aria-hidden="true"></i></div>
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
import firebase from "firebase";

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
			const firebaseConfig = {
				apiKey: "AIzaSyDn7efC-m69rn1jevcOIRw6-cIJITcacak",
				authDomain: "vegmart-c4605.firebaseapp.com",
				databaseURL: "https://vegmart-c4605-default-rtdb.firebaseio.com",
				projectId: "vegmart-c4605",
				storageBucket: "vegmart-c4605.appspot.com",
				messagingSenderId: "402249625272",
				appId: "1:402249625272:web:1dd85811f72e821e484e4d",
			};
			const firebaseApp = firebase.initializeApp(firebaseConfig);
			const db = firebaseApp.firestore();
			db.collection("order")
				.get()
				.then((d) => {
					d.forEach((d) => {
						this.od[d.id] = d.data();
					});
				});
		},
};
</script>
