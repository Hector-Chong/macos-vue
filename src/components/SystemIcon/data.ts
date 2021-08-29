import type{ SystemIconEles, SystemIconName } from './types';

const data: SystemIconName[] = [
  'applelogo',
 'arrow.forward.circle', 
 'restart.circle',
 'switch',
 'xmark',
 'arrow.up.backward.and.arrow.down.forward',
 'line.diagonal',
 'arrow.clockwise',
 'arrow.left',
 'arrow.right',
 'chevron.right',
 'lock.fill',
 'plus',
 'sidebar.left',
 'square.and.arrow.up',
 'chevron.backward',
 'chevron.right',
 'magnifyingglass'
];

const icons: SystemIconEles = {};

data.forEach((item) => {
  icons[item] = (require('@/assets/image/apple/' + item + '.svg') as unknown) as SVGElement;
});

export default icons;
