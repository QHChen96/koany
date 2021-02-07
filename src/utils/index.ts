export const compareVersion = (value: string, target: string) => {
  let e = value.split("."), t = target.split(".");
  for (var a = Math.max(e.length, t.length); e.length < a; ) e.push("0");
  for (;t.length < a; ) t.push("0");
  return 1e4 * +e[0] + 100 * +e[1] + 1 * +e[2] >= 1e4 * +t[0] + 100 * +t[1] + 1 * +t[2];
}
