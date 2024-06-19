<script lang="ts">
	import { CurrencyEur, ArrowBendDownLeft, X } from "phosphor-svelte";
</script>

<div class="container">
	<div class="header">
		<h1>Gastos</h1>
		<a href="/">Home</a>
	</div>

	<form>
		<div class="icon-container">
			<CurrencyEur size={24} weight="bold" />
		</div>
		<input type="number" placeholder="0.00" />
		<button class="submit-button">
			<ArrowBendDownLeft size={18} weight="bold" />
		</button>
	</form>

	<div class="content">
		<ul>
			<li>
				<CurrencyEur size={24} weight="bold" />
				<span>10.00</span>
				<button >
					<X size={18} weight="bold" />
				</button>
			</li>
		</ul>

		<div class="total">
			<h2 class="total-title">Total</h2>
			<p class="total-amount gelatine">
				<CurrencyEur size={40} weight="fill" />
				<span>10.00</span>
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 600px;
		padding: 2rem;
	}

	.header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	h1 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: bold;
	}

	a {
		font-size: 1.125rem;
		line-height: 1.75rem;
		text-decoration: underline;
	}

	a:hover {
		opacity: 0.75;
	}

	form {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.5rem;
		border-radius: 1rem;
		border: 2px solid black;
		margin-top: 1rem;
		overflow: hidden;
	}

	.icon-container {
		border-right: 2px solid black;
		background-color: #FEE3D0;
		padding: 0.75rem;
	}

	form input {
		flex-grow: 1;
		font-size: 1.25rem;
		outline: none;
	}

	.submit-button {
		margin-right: 1rem;
		border-radius: 9999px;
		background: black;
		padding: 0.5rem;
		color: white;
		transition: 0.2s ease;
	}

	.submit-button:hover {
		opacity: 0.75;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: space-between;
		overflow-y: hidden;
	}

	ul {
		position: relative;
		flex-grow: 1;
		overflow-y: auto;
	}

	li {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 0.25rem;
		border-top: 2px solid #e5e7eb;
		padding: 1rem 0.5rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	li:first-child {
		border-top: none;
	}

	li button {
		margin-left: auto;
		display: grid;
		border-radius: 0.75rem;
		border: 2px solid;
		padding: 0.5rem;
		color: #d1d5db;
		transition: 0.2s ease;
	}

	li button:hover {
		border-color: #f87171;
		color: #f87171;
	}

	.total {
		margin-top: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 2px solid black;
		padding-top: 1rem;
	}

	.total-title {
		font-size: 1.875rem;
		font-weight: bold;
	}

	.total-amount {
		display: flex;
		align-items: center;
		font-size: 1.875rem;
		font-weight: bold;
	}

	@keyframes gelatine {
		from,
		to {
			transform: scale(1, 1);
		}
		25% {
			transform: scale(0.95, 1.05);
		}
		50% {
			transform: scale(1.05, 0.95);
		}
		75% {
			transform: scale(0.975, 1.025);
		}
	}

	.gelatine {
		animation: gelatine 0.3s ease;
	}
</style>
