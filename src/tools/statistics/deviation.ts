export function standardDeviation(values: ReadonlyArray<number>): number {
    const avg = average(values);

    const squareDiffs = values.map(function (value) {
        const diff = value - avg;
        return diff * diff;
    });

    const avgSquareDiff = average(squareDiffs);
    return Math.sqrt(avgSquareDiff);
}

function average(values: ReadonlyArray<number>) {
    const sum = values.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    return sum / values.length;
}