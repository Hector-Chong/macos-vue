import { Component, h, VNode } from 'vue';
import WindowLayout from '../layout/window/index.vue';
import { WindowPropsInterface } from '../layout/window/useWindow';
import WindowWrapper from '../layout/wrapper/index';
import { WindowItem } from '../types';
import WindowApi from './WindowApi';

export default class WindowRenderer {
  private windowItems: WindowItem[];
  private components: Set<Component>;
  private componentCache: Map<Component, VNode>;
  private renderChildren: Map<number, VNode>;
  private windowPropsCache: Map<number, WindowApi>;
  private windowItemsMap: Map<number, WindowItem>;
  private modifiedWindowUidStack: number[];

  constructor(windows: WindowItem[]) {
    this.windowItems = [];
    this.componentCache = new Map();
    this.windowItemsMap = new Map();
    this.components = new Set();
    this.renderChildren = new Map();
    this.windowPropsCache = new Map();
    this.modifiedWindowUidStack = [];

    windows.length && this.init(windows);
  }

  init(windows: WindowItem[]) {
    for (const windowItem of windows) {
      this.addWindow(windowItem);
    }
  }

  createLayout(component: Component, props: any) {
    return h(WindowLayout, props, () => [this.createComponent(component, {})]);
  }

  createComponent(component: Component, props: any) {
    let componentInstance = this.componentCache.get(component);

    if (componentInstance) return componentInstance;

    componentInstance = h(component, props, () => []);

    this.componentCache.set(component, componentInstance);
    return componentInstance;
  }

  addWindow(window: WindowItem) {
    const app = window.app;
    const component = app.component;

    if (app.only && this.components.has(window.app.component)) return;

    this.windowItems.push(window);
    this.windowItemsMap.set(window.uid, window);
    this.components.add(component);
  }

  getVisibleWindows() {
    return this.windowItems.filter((i) => i.visible);
  }

  buildCanvas(children: VNode[]) {
    return h(WindowWrapper, {}, () => children);
  }

  buildWindowItemProps(window: WindowItem): WindowPropsInterface {
    let windowApi: WindowApi;

    if (this.windowPropsCache.has(window.uid)) {
      windowApi = this.windowPropsCache.get(window.uid) as WindowApi;
    } else {
      windowApi = new WindowApi(window);
      this.windowPropsCache.set(window.uid, windowApi);
    }

    const props = {
      width: window.width,
      height: window.height,
      x: window.x,
      y: window.y,
      title: window.app.title,
      zIndex: window.zIndex,
      window: windowApi,
    };

    return props;
  }

  buildLayout(window: WindowItem) {
    const layoutProps = this.buildWindowItemProps(window);

    return this.createLayout(window.app.component, layoutProps);
  }

  run() {
    const windows = this.getVisibleWindows();
    const layouts = [];

    for (const windowItem of windows) {
      const layout = this.buildLayout(windowItem);

      this.renderChildren.clear();
      this.renderChildren.set(windowItem.uid, layout);

      layouts.push(layout);
    }
  }

  rerun() {
    // if (!this.renderChildren.size) return;
    // if (!this.modifiedWindowUidStack.length) return;
    // let modifieldWindowUid;
    // while ((modifieldWindowUid = this.modifiedWindowUidStack.pop())) {
    //   const curWindow = this.windowItemsMap.get(modifieldWindowUid);
    //   if (!curWindow) continue;
    //   const newWindowVnode = this.buildLayout(curWindow);
    //   this.renderChildren.set(modifieldWindowUid, newWindowVnode);
    // }
    // if (this.vmElem) {
    //   console.log([...this.renderChildren.values()]);
    //   const vnode = this.buildCanvas([...this.renderChildren.values()]);
    //   render(vnode, document.createElement('div'));
    // }
    // this.run();
  }

  pushRerenderWindowUid(uid: number) {
    return this.modifiedWindowUidStack.push(uid);
  }
}
