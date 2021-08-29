export const setTitle = (title: string): string => {
  const processTitle = process.env.VUE_APP_TITLE || 'macOS';
  window.document.title = `${processTitle}${title ? ` | ${title}` : ''}`;

  return title;
};

export const htmlDecode = (text: string): string | null => {
  const temp = document.createElement('div');
  temp.innerHTML = text;

  return temp.innerText || temp.textContent;
};

export const debounce = (fn: Function, wait: number) => {
  let timerId: number;

  return function(...args: any[]) {
    clearTimeout(timerId);

    timerId = setTimeout(function() {
      fn(...args);
    }, wait);
  };
};
