<template>
  <div id="sidebar">
    <div class="inner">
      <!-- Menu -->
      <nav id="menu">
        <ul>
          <li><router-link to="/" replace>DashBoard</router-link></li>
          <li><router-link to="/user" replace>User</router-link></li>
          <li><router-link to="/order" replace>Order</router-link></li>
          <li><router-link to="/product" replace>Product</router-link></li>
          <li>
            <span class="opener">Setting</span>
            <ul>
              <li><router-link to="/login">Logout</router-link></li>
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