export class SafeEffect {
	#activeEffect = $state(false);

	safeEffect(fn: () => void) {
		if (this.#activeEffect || !$effect.tracking()) return;

		$effect(() => {
			this.#activeEffect = true;
			fn();
			return () => {
				this.#activeEffect = false;
			};
		});
	}
}
