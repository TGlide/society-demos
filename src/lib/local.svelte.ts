import { browser } from "$app/environment";

export class Local<T> {
	current = $state<T>();
	#dispose: () => void = () => {};

	constructor(key: string, defaultValue: T) {
		this.current = defaultValue;
		if (!browser) return;

		const local = localStorage.getItem(key);

		this.#dispose = $effect.root(() => {
			$effect.pre(() => {
				localStorage.setItem(key, JSON.stringify(this.current));
			});
		});

		new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
			if (!local) return;
			try {
				return (this.current = JSON.parse(local));
			} catch {
				console.error("Could not parse local storage", key, local);
			}
		});
	}

	dispose() {
		this.#dispose();
	}
}
