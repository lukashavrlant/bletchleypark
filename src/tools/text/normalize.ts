export function normalize(input: string): string {
    return input.toLocaleLowerCase().replace(/[^a-z]+/g, '');
}