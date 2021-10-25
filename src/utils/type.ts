export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export type Mutable<T> = T extends Record<string, unknown> ? {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? Array<Mutable<U>> : Mutable<T[P]>
} : T;