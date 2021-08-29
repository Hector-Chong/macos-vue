import { MENU_BAR_HEIGHT } from '@/enum/appEnum';
import { useDockStore } from '@/store/modules/dock';
import { WindowItem } from '../types';
import WindowManager from './Manager';

export default class WindowApi {
  private readonly window: WindowItem;
  private readonly manager: WindowManager;
  private lastX = 0;
  private lastY = 0;
  private lastWidth = 0;
  private lastHeight = 0;
  private isMaximum = false;
  // private renderer: WindowRenderer;

  constructor(window: WindowItem, manager: WindowManager) {
    this.window = window;
    this.manager = manager;
    // this.renderer = renderer;
  }

  getCurMaximumUid() {
    return this.manager.getCurMaximumUid();
  }

  setSize(width: number, height: number) {
    if (this.isMaximum) return this;

    return this.setWidth(width).setHeight(height);

    // this.renderer.pushRerenderWindowUid(this.window.uid);
    // return this.renderer.rerun();
  }

  setSizeTo(width: number, height: number) {
    if (this.isMaximum) return this;

    if (!this.setWidthTo(width) || !this.setHeightTo(height)) return false;

    return this;
  }

  setWidth(width: number) {
    if (this.isMaximum) return this;

    this.window.width = width;
    return this;
  }

  setHeight(height: number) {
    if (this.isMaximum) return this;

    this.window.height = height;
    return this;
  }

  setWidthTo(width: number) {
    if (this.window.maxWidth && this.window.width + width > this.window.maxWidth) {
      return false;
    } else if (this.window.minWidth && this.window.width + width < this.window.minWidth) {
      return false;
    } else {
      this.window.width += width;
    }

    return this;
  }

  setHeightTo(height: number) {
    if (this.isMaximum) return this;

    if (this.window.maxHeight && this.window.height + height > this.window.maxHeight) {
      return false;
    } else if (this.window.minHeight && this.window.height + height < this.window.minHeight) {
      return false;
    } else {
      this.window.height += height;
    }

    return this;
  }

  setPosition(x: number, y: number) {
    if (this.isMaximum) return this;

    this.window.x = x;
    this.window.y = y;

    return this;
  }

  setPositionTo(x?: number, y?: number) {
    if (this.isMaximum) return this;

    if (x !== undefined) this.setPositionXTo(x);

    if (y !== undefined) this.setPositionYTo(y);

    return this;
  }

  setPositionXTo(to: number) {
    if (this.isMaximum) return this;

    this.window.x += to;
    return this;
  }

  setPositionYTo(to: number) {
    if (this.isMaximum) return this;

    if (this.window.y + to < 0) return this;

    this.window.y += to;
    return this;
  }

  getWindow() {
    return this.window;
  }

  getWidth() {
    return this.window.width;
  }

  getHeight() {
    return this.window.height;
  }

  setZindex(index: number) {
    this.window.zIndex = index;
    return this;
  }

  addZindex() {
    this.window.zIndex = this.manager.getMaxZindex() + 1;
    return this;
  }

  setDefault() {
    if (this.isMaximum) {
      this.isMaximum = false;

      this.setPosition(this.lastX, this.lastY);
      this.setSize(this.lastWidth, this.lastHeight);

      this.lastX = this.lastY = this.lastWidth = this.lastHeight = 0;

      const dockStore = useDockStore();
      dockStore.setVisible(true);
    }

    return this;
  }

  private setLastData() {
    this.lastWidth = this.window.width;
    this.lastHeight = this.window.height;
    this.lastX = this.window.x;
    this.lastY = this.window.y;

    return this;
  }

  maximum() {
    if (this.isMaximum) return this.setDefault();

    this.setLastData();

    this.setPosition(0, 0);
    this.addZindex();
    this.setSize(document.body.clientWidth, document.body.clientHeight - MENU_BAR_HEIGHT);
    this.isMaximum = true;

    const dockStore = useDockStore();
    dockStore.setVisible(false);

    this.manager.setCurMaximumUid(this.window.uid);

    return this;
  }

  minimize() {
    this.setDefault();
    this.manager.minimizeWindow(this.window);
  }

  close() {
    this.setDefault();
    this.manager.closeWindow(this.window);
  }

  setTransition(value: boolean) {
    this.window.transition = value;
    return this;
  }
}
