export const toRem = (unit: number | string, withRem = false): string | number => {
  let res: number | string;
  let base: string | number;

  if (typeof unit === 'number') {
    res = (unit * 0.0625).toFixed(4);
  } else {
    if (unit.endsWith('rem')) return unit;
    else if (unit.endsWith('%')) {
      return unit;
    } else if (unit.endsWith('px')) {
      base = +unit.slice(0, -2);
      res = (base * 0.0625).toFixed(4);
    } else {
      res = +unit;
    }
  }

  return withRem ? res + 'rem' : res;
};

export const remToPx = (rem: number | string, withPx = false): string | number => {
  const base = typeof rem === 'string' && rem.endsWith('rem') ? rem.slice(0, -3) : rem;
  const res: number = +base / 0.0625;

  return withPx ? res + 'px' : res;
};
