export type Mods = Record<string, string | boolean>;

export const clsx = (
  cls: string,
  mods?: Mods,
  additionals: Array<string | undefined> = []
): string => {
  let modsArr: string[] = [];
  if (mods !== undefined) {
    modsArr = Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className);
  }
  return [cls, ...additionals.filter((vl) => !!vl), ...modsArr].join(" ");
};
