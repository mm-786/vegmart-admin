<template>
	<div class="is-preload">
		<div id="wrapper">

			<!-- Main -->
			<div id="main">
				<div class="inner">

					<!-- Header -->
					<header id="header">
						<a class="logo"><strong style="text-transform: uppercase;">Login</strong></a>
					</header>
					<form style="display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					min-height: 90vh;">
						<div style="padding: 25px; border-radius: 25px; background-color: rgb(247, 234, 234);">
							<div class="col-6 col-12-xsmall">
								<input type="text" inputmode="numeric" v-model="mob" maxlength="10" placeholder="MOBILE" required />
							</div><br />
							<div class="col-6 col-12-xsmall">
								<input type="password" maxlength="4" v-model="pin"  placeholder="PIN" required/>
							</div><br />

							<div class="col-6 col-12-xsmall">
								<input :disabled="mob===''|| pin===''" @click="login()" type="button" value="LOGIN" class="primary" />
							</div>
						</div>
					</form>



				</div>
			</div>

		</div>
	</div>
</template>

<script>

	import db from "../firebase.js";
	export default {
		name: 'login',
		data(){
			return{
				mob:'',
				pin:''
			}
		},
		mounted(){
			window.localStorage.clear();
		},
		methods:{
			async login(){
				
			const usr = await db.user.where('mob','==',this.mob).where('pin','==',this.pin).where('type','==','admin').get()
				if (usr.empty) {
					alert('Invalid :(');
					this.mob="";
					this.pin="";
				}else{
					window.localStorage.setItem('urs',this.mob);
					this.$router.replace('/')
				}
			}
		}
	}

</script>