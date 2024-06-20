<script lang="ts">
	import { CurrencyEur } from "phosphor-svelte";
</script>

<div class="mx-auto flex h-screen w-[600px] flex-col p-8">
	<h1 class="text-4xl font-bold">Olá Thomas!</h1>
	<p class="mt-2 flex items-center text-xl">
		O total de gastos atual é de
		<span class="inline-flex items-center pl-1">
			<CurrencyEur weight="bold" /> 10.00
		</span>
	</p>

	<a href="/conta" class="mt-4 flex gap-2 underline hover:opacity-50"> Gastos </a>
</div>
