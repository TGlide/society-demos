<script lang="ts">
	import { CurrencyEur, Empty, ArrowBendDownLeft, X } from "phosphor-svelte";
	import { flip } from "svelte/animate";
	import { linear } from "svelte/easing";
	import { fade } from "svelte/transition";

	let value = $state<number>();
	const disabled = $derived(typeof value !== "number");
	const gastos = $state<number[]>([10, 20, 30]);

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!value) return;
		gastos.push(value);
		value = undefined;
	}
</script>

<div class="mx-auto w-[600px] p-8">
	<h1 class="text-4xl font-bold">Gastos</h1>

	<form
		{onsubmit}
		class="mt-4 flex items-center gap-2 overflow-hidden rounded-2xl border-2 border-black"
	>
		<div class="border-r-2 border-black bg-orange-500/20 p-3">
			<CurrencyEur size={24} weight="bold" />
		</div>
		<input type="number" placeholder="0.00" class="grow text-xl outline-none" bind:value />
		<button class="pr-4 transition-all" class:opacity-50={disabled} {disabled}>
			<ArrowBendDownLeft size={18} weight="bold" />
		</button>
	</form>

	{#if gastos.length}
		<ul class="relative m-4" transition:fade>
			{#each gastos as gasto, idx (gasto)}
				<li
					class="flex w-full items-center gap-1 border-t-2 border-gray-300 py-4 text-xl font-semibold first:border-t-0"
					animate:flip={{ duration: 500 }}
					out:fade={{ duration: 200 }}
				>
					<CurrencyEur size={20} weight="bold" />
					<span>{gasto.toFixed(2)}</span>
					<button
						class="ml-auto grid rounded-xl border-2 p-2 text-gray-300 transition hover:border-red-300 hover:text-red-300"
						onclick={() => gastos.splice(idx, 1)}
					>
						<X size={18} weight="bold" />
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="mt-8 flex flex-col items-center gap-2 text-gray-500">
			<Empty size={48} />
			<p class="text-center text-xl font-semibold">Sem gastos para mostrar</p>
		</div>
	{/if}
</div>

<style>
	@keyframes gelatine {
		from,
		to {
			transform: scale(1, 1);
		}
		25% {
			transform: scale(0.9, 1.1);
		}
		50% {
			transform: scale(1.1, 0.9);
		}
		75% {
			transform: scale(0.95, 1.05);
		}
	}

	li {
		animation: gelatine 0.3s ease;
	}
</style>
