import { Component } from 'vue';

export const resolvePromiseComponent = (
  cmtPromise: () => Promise<Component>
): (() => Promise<Component>) => {
  let cacheComponent: Component;

  return () =>
    new Promise(async (r) => {
      if (cacheComponent) r(cacheComponent);

      r(await cmtPromise());
    });
};
