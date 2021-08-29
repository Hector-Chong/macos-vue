export type SystemIconName =
  | 'applelogo'
  | 'arrow.forward.circle'
  | 'restart.circle'
  | 'switch'
  | 'line.diagonal'
  | 'arrow.up.backward.and.arrow.down.forward'
  | 'xmark'
  | 'arrow.clockwise'
  | 'arrow.left'
  | 'arrow.right'
  | 'lock.fill'
  | 'plus'
  | 'sidebar.left'
  | 'square.and.arrow.up'
  | 'chevron.right'
  | 'magnifyingglass'
  | 'chevron.backward';

export type SystemIconEles = {
  [P: string]: SVGElement;
};
