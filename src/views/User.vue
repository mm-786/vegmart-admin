<template>
	<div class="is-preload">
		<div id="wrapper">
			<!-- Main -->
			<div id="main">
				<div class="inner">
					<!-- Header -->
					<header id="header">
						<a href="" class="logo"><strong style="text-transform: uppercase">user</strong></a>
					</header>

					<div class="table-wrapper" style="margin: 25px;">
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Gender</th>
									<th>Mobile</th>
									<th>Email</th>
									<th>PIN code</th>
									<th>City</th>
								</tr>
							</thead>
							<tbody style="text-align: left;">
								<tr v-for="u,i in user" :key="i">
									<td>{{u.name}}</td>
									<td>{{u.gender}}</td>
									<td>{{u.mob}}</td>
									<td>{{u.email}}</td>
									<td>{{u.add.pin}}</td>
									<td>{{u.add.city}}</td>
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

<script>
	import db from "../firebase.js";
	import SideBar from "../component/SideBar.vue";
	export default {
		name: "user",
		components: {
			SideBar,
		},
		data() {
			return {
				user:{}
			}
		},
		mounted() {
			db.user.where('type','!=',"admin")
				.get()
				.then((d) => {
					d.forEach((d) => {
						this.user[d.id] = d.data();
					});
				});
				this.$forceUpdate();
		},
	};
</script>