export class Local<T> {
	current = $state<T>() as T;
	#dispose: () => void;

	constructor(key: string, defaultValue: T) {
		this.current = defaultValue;
		const localValue = localStorage.getItem(key);

		if (localValue) {
			this.current = JSON.parse(localValue) as T;
		}

		this.#dispose = $effect.root(() => {
			$effect(() => {
				localStorage.setItem(key, JSON.stringify(this.current));
			});
		});
	}

	dispose() {
		this.#dispose();
	}
}
