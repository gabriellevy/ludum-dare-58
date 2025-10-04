export function getRandomEnumValue<T extends Record<string, unknown>>(enumObj: T): T[keyof T] {
    const enumValues = Object.values(enumObj);

    const randomIndex = Math.floor(Math.random() * enumValues.length);

    return enumValues[randomIndex] as T[keyof T];
}

// de 1 à num
export function getRandomInt(num: number): number {
    return Math.floor(Math.random() * num) + 1;
}

// de 0 à num
export function getRandomInt0(num: number): number {
    return Math.floor(Math.random() * num);
}
