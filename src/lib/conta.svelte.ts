type Gasto = {
	amount: number;
	createdAt: Date;
};

class Conta {
	gastos = $state<Gasto[]>([]);
	total = $derived(this.gastos.reduce((acc, gasto) => acc + gasto.amount, 0));
}

export const conta = new Conta();
