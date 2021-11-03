<template>
<div class="is-preload">
	<div id="wrapper">

				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<header id="header">
									<a href="" class="logo"><strong style="text-transform: uppercase;">Order</strong></a>
								</header>

									<div class="table-wrapper" style="margin: 25px;">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Item:Qty(kg)</th>
                  <th>Order Price</th>
                  <th>User</th>
                  <th>Status</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody style="text-align: left;">
               
              </tbody>
            </table>
          </div>
						</div>
					</div>
					<SideBar/>

			</div>
  </div>
</template>

<script >

import SideBar from '../component/SideBar.vue';
export default {
	name: 'Order',
	components: {
		SideBar,
  }
}

</script>
