import { browser } from "$app/environment";

export class Local<T> {
	current = $state<T>() as T;
	#dispose: () => void = () => {};

	constructor(key: string, defaultValue: T) {
		this.current = defaultValue;
		if (!browser) return;

		const local = localStorage.getItem(key);

		this.#dispose = $effect.root(() => {
			$inspect(this.current);
			$effect.pre(() => {
				console.log("Setting local storage", key, this.current);
				localStorage.setItem(key, JSON.stringify(this.current));
			});
		});

		if (!local) return;
		try {
			this.current = JSON.parse(local);
		} catch {
			console.error("Could not parse local storage", key, local);
		}
	}

	dispose() {
		this.#dispose();
	}
}
