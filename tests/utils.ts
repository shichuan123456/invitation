export function getEleByAttri(wrapper:any, attri: string) {
  return wrapper.find(`[data-test=${attri}]`);
}
