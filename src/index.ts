export interface IReadTimeOptions {
	wpm?: number;
	lessThanOne?: string;
	singular?: string;
	plural?: string;
}

const defaults = {
	wpm: 200,
	lessThanOne: "less than a minute",
	singular: "%{minute} minute",
	plural: "%{minute} minutes",
};

export function calculate(
	text: string,
	options: IReadTimeOptions = {},
): string {
	const merged = { ...defaults, ...options };

	const words = text.trim().split(/\s+/g);
	let time = words.length / merged.wpm;

	const regtoken = new RegExp("%{minute}", "gim");

	let result: string;
	if (time < 1)
		result = merged.lessThanOne.replace(regtoken, time.toString());
	else {
		time = Math.round(time);
		result =
			time > 1
				? merged.plural.replace(regtoken, time.toString())
				: merged.singular.replace(regtoken, time.toString());
	}

	return result;
}
