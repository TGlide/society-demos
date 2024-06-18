import { Local } from "./local.svelte";

type Gasto = {
	value: number;
	id: number;
};

class Conta {
	#gastos = new Local<Gasto[]>("gastos", []);
	total = $derived(this.gastos.reduce((a, b) => a + b.value, 0));

	get gastos() {
		return this.#gastos.current
	}

	set gastos(gastos: Gasto[]) {
		this.#gastos.current = gastos;
	}
}

export const conta = new Conta();
