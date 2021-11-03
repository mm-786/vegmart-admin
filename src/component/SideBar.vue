<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Menu -->
      <nav id="menu">
        <ul>
          <li><router-link to="/">DashBoard</router-link></li>
          <li><router-link to="/user">User</router-link></li>
          <li><router-link to="/order">Order</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li>
            <span class="opener">Setting</span>
            <ul>
              <li><router-link to="/product">Logout</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>

      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>