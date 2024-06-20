import { Local } from "./local.svelte";

type Gasto = {
	amount: number;
	createdAt: Date;
};

class Conta {
	#gastos = new Local<Gasto[]>('gastos', []);
	total = $derived(this.#gastos.current.reduce((total, gasto) => total + gasto.amount, 0));

	get gastos() {
		return this.#gastos.current;
	}

	set gastos(v: Gasto[]) {
		this.#gastos.current = v;
	}
}

export const conta = new Conta();
