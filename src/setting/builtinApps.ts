import { OsApplication } from '@/application';
import { resolvePromiseComponent } from '@/logic/app/loadComponent';

const builtinApps: OsApplication[] = [
  {
    id: 'wechat',
    title: '微信',
    icon: require('@/components/App/Wechat/image/AppIcon.png'),
    component: resolvePromiseComponent(() => import('@/components/App/Wechat/index.vue')),
  },
  {
    id: 'safari',
    title: 'Safari 浏览器',
    icon: require('@/assets/image/apple/safari.png'),
    component: resolvePromiseComponent(() => import('@/components/App/Safari/index.vue')),
  },
  {
    id: 'note',
    title: '备忘录',
    icon: require('@/components/App/Note/image/AppIcon.png'),
    component: resolvePromiseComponent(() => import('@/components/App/Note/index.vue')),
  },
  {
    id: 'todo',
    title: '提醒事项',
    icon: require('@/components/App/Todo/image/AppIcon.png'),
    component: resolvePromiseComponent(() => import('@/components/App/Todo/index.vue')),
  },
  {
    id: 'setting',
    title: '系统偏好设置',
    minWidth: 680,
    minHeight: 720,
    maxWidth: 680,
    maxHeight: 720,
    icon: require('@/components/App/Setting/image/AppIcon.png'),
    component: resolvePromiseComponent(() => import('@/components/App/Setting/index.vue')),
  },
];

export default builtinApps;
