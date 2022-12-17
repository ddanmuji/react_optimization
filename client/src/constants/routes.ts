export const ROUTER_PATH = {
  MAIN: '/',
  ITEMS: '/items',
  PART: '/part',
  RIDING_STYLES: '/riding-styles',
} as const;

export type RouterPathType = typeof ROUTER_PATH[keyof typeof ROUTER_PATH];
