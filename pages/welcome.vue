<script lang="ts" setup></script>
<template>
	<div class="login-container">
		<h1 class="mb-4 text-xl font-bold">Welcome {user}</h1>
		<p>Access your dashboard and account from here</p>

		<button type="button"
        class="border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
    Logout
</button>
	</div>
</template>

<style scoped>
.login-container {
	max-width: 400px;
	margin: 0 auto;
	padding: 2rem;
	background-color: #f9f9f9;
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	text-align: center;
	margin-top: 100px;
}




h1 {
	color: #333;
}


p {
	color: #666;
	margin-bottom: 1rem;
}


@media (max-width: 480px) {
	.login-container {
		padding: 1.5rem;
		margin-top: 50px;
	}
}
</style>
