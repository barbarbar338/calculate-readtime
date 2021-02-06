export interface IReadTimeOptions {
	wpm?: number;
	lessThanOne?: string;
	singular?: string;
	plural?: string;
}

const defaults = {
	wpm: 200,
	lessThanOne: "less than a minute",
	singular: "minute",
	plural: "minutes",
};

export function calculate(
	text: string,
	options: IReadTimeOptions = {},
): string {
	const merged = { ...defaults, ...options };

	const words = text.trim().split(/\s+/g);
	let time = words.length / merged.wpm;

	let result: string;
	if (time < 1) result = merged.lessThanOne;
	else {
		time = Math.round(time);
		result = `${time} ${time > 1 ? merged.plural : merged.singular}`;
	}

	return result;
}
