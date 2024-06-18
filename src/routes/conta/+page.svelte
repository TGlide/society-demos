<script lang="ts">
	import { CurrencyEur, ArrowBendDownLeft, X } from "phosphor-svelte";
	import { flip } from "svelte/animate";
	import { fade } from "svelte/transition";
	import { conta } from "$lib/conta.svelte";

	let value = $state<number>();
	const disabled = $derived(typeof value !== "number");

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!value) return;

		conta.gastos.push({ value, id: Date.now() });
		value = undefined;
	}

	$effect(() => {
		if (conta.total >= 5000) {
			console.log("aaaaaaaaaaaaaaaaaa");
		}
	});
</script>

<div class="mx-auto flex h-screen w-[600px] flex-col p-8">
	<h1 class="text-4xl font-bold">Gastos</h1>

	<form
		{onsubmit}
		class="mt-4 flex shrink-0 items-center gap-2 overflow-hidden rounded-2xl border-2 border-black"
	>
		<div class="border-r-2 border-black bg-orange-500/20 p-3">
			<CurrencyEur size={24} weight="bold" />
		</div>
		<input type="number" placeholder="0.00" class="grow text-xl outline-none" bind:value />
		<button
			class="p-2 {disabled ? '' : 'rounded-full bg-black text-white'} mr-4 transition-all"
			class:opacity-50={disabled}
			{disabled}
		>
			<ArrowBendDownLeft size={18} weight="bold" />
		</button>
	</form>

	<div class="flex grow flex-col justify-between overflow-y-clip">
		<ul class="relative grow overflow-y-auto">
			{#each conta.gastos as gasto, idx (gasto.id)}
				<li
					class=" flex w-full items-center gap-1 border-t-2 border-gray-200 px-2 py-4 text-xl font-semibold first:border-t-0"
					animate:flip={{ duration: 500 }}
					transition:fade={{ duration: 150 }}
				>
					<CurrencyEur size={24} weight="bold" />
					<span>{gasto.value.toFixed(2)}</span>
					<button
						class="ml-auto grid rounded-xl border-2 p-2 text-gray-300 transition hover:border-red-300 hover:text-red-300"
						onclick={() => conta.gastos.splice(idx, 1)}
					>
						<X size={18} weight="bold" />
					</button>
				</li>
			{/each}
		</ul>

		<div class="mt-auto flex items-center justify-between border-t-2 border-black pt-4">
			<h2 class="text-3xl font-bold">Total</h2>
			{#key conta.total}
				<p class="gelatine flex items-center text-3xl font-bold">
					<CurrencyEur size={40} weight="fill" />
					<span>{conta.total.toFixed(2)}</span>
				</p>
			{/key}
		</div>
	</div>
</div>

<style>
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
