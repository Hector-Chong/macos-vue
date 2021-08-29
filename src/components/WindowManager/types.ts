import { OsApplication, Resizable } from '@/application';

export interface WindowItem extends Resizable {
  app: OsApplication;
  uid: number;
  x: number;
  y: number;
  width: number;
  height: number;
  visible: boolean;
  zIndex: number;
  transition: boolean;
}
