import { Component } from 'vue';

declare interface Resizable {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

declare interface OsApplication extends Resizable {
  id: string;
  title: string;
  icon: string;
  component: () => Promise<Component>;
  loadedComponent?: Component;
  only?: boolean;
}
