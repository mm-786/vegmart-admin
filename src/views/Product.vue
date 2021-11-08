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
                <tr>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><label for="upload">
      <span  aria-hidden="true">Select Image</span>
      <span  aria-hidden="true"></span>
      <input type="file" id="upload" style="display:none">
</label></td>
                  <td>
                    <select>
                      <option>Veg</option>
                      <option>Fruit</option>
                    </select>
                  </td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="button" value="ADD" /></td>

                </tr>
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
                    <input @click="updateProduct(i)" type="button" value="update" />
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
  name: "product",
 
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
  methods:{
    updateProduct(id){
      db.product.doc(id).update({
        'price':this.prod[id].price,
        'stock':this.prod[id].stock,
      }).then(()=>{
         window.location.reload();
      })
    }
  }
};
</script>
<style scoped>
input#file {
  display: inline-block;
  width: 100%;
  padding: 120px 0 0 0;
  height: 100px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698394-icon-130-cloud-upload-512.png') center center no-repeat #e4e4e4;
  border-radius: 20px;
  background-size: 60px 60px;
}
</style>