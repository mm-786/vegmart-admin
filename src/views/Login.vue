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

	import firebase from "firebase";
	export default {
		name: 'login',
		data(){
			return{
				mob:'',
				pin:'',
				db:null
			}
		},
		mounted(){
			window.localStorage.clear();
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
			this.db = firebaseApp.firestore();
		},
		methods:{
			async login(){
				
			const usr = await this.db.collection("user").where('mob','==',this.mob).where('pin','==',this.pin).where('type','==','admin').get()
				if (usr.empty) {
					alert('not')
				}else{
					window.localStorage.setItem('urs',this.mob);
					this.$router.replace('/')
				}
			}
		}
	}

</script>