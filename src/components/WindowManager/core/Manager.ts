import { OsApplication } from '@/application';
import { Component, reactive } from 'vue';
import { WindowItem } from '../types';
import WindowRenderer from './Renderer';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, MIN_HEIGHT, MIN_WIDTH } from './var';
import WindowEntry from '../components/entry.vue';

let uid = 0;

export default class WindowManager {
  // private $renderer: WindowRenderer;
  private windows: WindowItem[];
  private appId: string[];
  private appUid: number[];
  private usedComponents: Set<Component>;
  private curMaximumUid = 0;

  constructor() {
    this.usedComponents = new Set();
    this.appId = [];
    this.appUid = [];
    this.windows = reactive([]);
    // this.$renderer = new WindowRenderer(this.windows);

    return this;
  }

  async addWindow(app: OsApplication, x?: number, y?: number, visible = true, only = true) {
    if (only && this.hasUsed(app)) return;

    const windowItem: WindowItem = {
      uid: ++uid,
      app,
      x: x || 0,
      y: y || 0,
      width: app.minWidth || DEFAULT_WIDTH,
      height: app.minHeight || DEFAULT_HEIGHT,
      minWidth: app.minWidth || MIN_WIDTH,
      minHeight: app.minHeight || MIN_HEIGHT,
      visible,
      zIndex: 0,
      transition: true,
    };

    this.usedComponents.add(app.loadedComponent as Component);
    this.windows.push(windowItem);
    // this.$renderer.addWindow(windowItem);

    this.render();
  }

  closeWindow(window: WindowItem) {
    let index = -1;

    if ((index = this.windows.indexOf(window)) >= 0) this.windows.splice(index, 1);

    return this;
  }

  minimizeWindow(window: WindowItem) {
    return this.closeWindow(window);
  }

  getUsedComponents() {
    return this.usedComponents;
  }

  getWindows() {
    return this.windows;
  }

  getCurMaximumUid() {
    return this.curMaximumUid;
  }

  setCurMaximumUid(uid: number) {
    return (this.curMaximumUid = uid);
  }

  render() {
    // return this.$renderer.run();
  }

  invokeWindow() {}

  hasUsed(app: OsApplication | WindowItem | number): boolean {
    if (typeof app === 'number') {
      return this.appUid.includes(app);
    }

    if ((<WindowItem>app).uid) {
      return this.appUid.includes((<WindowItem>app).uid);
    } else {
      return this.appId.includes((<OsApplication>app).id);
    }
  }

  getMaxZindex() {
    return Math.max(...this.windows.map((w) => w.zIndex));
  }

  static getComponent() {
    return WindowEntry;
  }
}
