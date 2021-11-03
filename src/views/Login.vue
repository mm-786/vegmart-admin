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
								<input type="text" inputmode="numeric" maxlength="10" placeholder="MOBILE" />
							</div><br />
							<div class="col-6 col-12-xsmall">
								<input type="password" maxlength="4"  placeholder="PIN" />
							</div><br />

							<div class="col-6 col-12-xsmall">
								<input type="submit" value="LOGIN" class="primary" />
							</div>
						</div>
					</form>



				</div>
			</div>

		</div>
	</div>
</template>

<script>


	export default {
		name: 'login',
		components: {
		}
	}

</script>