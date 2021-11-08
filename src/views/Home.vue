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
									<a href="" class="logo"><strong style="text-transform: uppercase;">DashBoard</strong></a>
								</header>

								<!--  -->
								<section style="justify-content: space-around;">
									<div class="posts" >
										<article style="background-color: rgba(255, 174, 127, 0.2); height: 150px; border-radius: 25px;">
											<router-link to="/user" style="display: flex; justify-content: space-around; text-decoration: none;">
												<div style="background-color: rgb(255, 174, 127); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Male</h5>
													<h2 style="color: rgb(255, 255, 200);">55</h2>
												</div>
												<div >
													<h2 style="color: rgba(255, 174, 127,0.8);;">Total User</h2>
													<h1 style="color: rgb(255, 174, 127);">115</h1>
												</div>
												<div style="background-color: rgb(255, 174, 127); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Female</h5>
													<h2 style="color: rgba(170, 88, 88, 0.7);">55</h2>
												</div>
											</router-link>

										</article>
										</div>
										<div class="posts">
										<article  style="background-color: rgba(127, 172, 255,0.2); height: 150px; border-radius: 25px;">
											<router-link to="/order" style="display: flex; justify-content: space-around; text-decoration: none;">
												<div style="background-color: rgb(127, 172, 255); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Pendding</h5>
													<h2 style="color: rgba(255,0,0,0.7);">55</h2>
												</div>
												<div>
													<h2 style="color: rgba(127, 172, 255,0.8);">Total Order</h2>
													<h1 style="color: rgb(127, 172, 255);">115</h1>
												</div>
												<div style="background-color: rgb(127, 172, 255); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Complete</h5>
													<h2 style="color: rgb(22, 121, 22);">35</h2>
												</div>
											</router-link>
											
										</article>
										</div>
										<div class="posts">
										<article style="background-color: rgba(255, 127, 191,0.2); height: 150px; border-radius: 25px;">
											<router-link to="/product" style="display: flex; justify-content: space-around; text-decoration: none;">
												<div style="background-color: rgb(255, 127, 191); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Vegetable</h5>
													<h2 style="color: rgba(28, 47, 214, 0.7);">55</h2>
												</div>
												<div>
													<h2 style="color: rgba(255, 127, 191,0.8);">Total Product</h2>
													<h1 style="color: rgb(255, 127, 191);">115</h1>
												</div>
												<div style="background-color: rgb(255, 127, 191); width: 80px; height: 80px; margin: auto; padding:10px; border-radius: 50px; text-align: center; align-items: center;">
													<h5 style="color: #fff; ;">Fruit</h5>
													<h2 style="color: rgba(83, 8, 8, 0.7);">55</h2>
												</div>
											</router-link>
											
										</article>
									</div>
								</section>

								<!--  -->
							
						</div>
					</div>
					
			</div>
  </div>
</template>

<script >

export default {
	name: 'Home',
	mounted(){
		
	},
	
}

</script>
