import { Local } from "./local.svelte";

type Gasto = {
	value: number;
	id: number;
};

class Conta {
	#gastos = new Local<Gasto[]>("gastos", []);
	total = $derived(this.gastos.reduce((a, b) => a + b.value, 0));

	get gastos() {
		console.log('Reading #gastos current', this.#gastos.current)
		return this.#gastos.current
	}

	set gastos(gastos: Gasto[]) {
		this.#gastos.current = gastos;
		localStorage.setItem("gastos", JSON.stringify(gastos));
	}
}

export const conta = new Conta();
