export function mapValues<KEY extends string, IN_VAL, OUT_VAL>(obj: Record<KEY, IN_VAL>, mapFn: (item: IN_VAL) => OUT_VAL): Record<KEY, OUT_VAL> {
    const newObject: any = {};

    Object.keys(obj).map(function (key) {
        newObject[key] = mapFn((obj as any)[key]);
    });

    return newObject;
}

export function values<VAL>(obj: Record<any, VAL>): ReadonlyArray<VAL> {
    const vals: Array<VAL> = [];

    Object.keys(obj).forEach(key => vals.push(obj[key]));

    return vals;
}