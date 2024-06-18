import { browser } from "$app/environment";

export class Local<T> {
	#current = $state<T>();
	#key: string;
	#defaultValue: T;

	constructor(key: string, defaultValue: T) {
		this.#key = key;
		this.#defaultValue = defaultValue;
		this.#current = defaultValue;
		if (!browser) return;
		const local = localStorage.getItem(key);
		if (!local) return;

		new Promise((resolve) => setTimeout(resolve, 1)).then(() => {
			try {
				return (this.#current = JSON.parse(local));
			} catch {
				console.error("Could not parse local storage", key, local);
			}
		});
	}

	get current() {
		return this.#current ?? this.#defaultValue;
	}

	set current(value: T) {
		this.#current = value;
		localStorage.setItem(this.#key, JSON.stringify(value));
	}
}
