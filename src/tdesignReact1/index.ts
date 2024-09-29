import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function tdesignReact1() {
  return {
    uiName: 'tdesign-react',
    lib: 'tdesign-react',
    map: getPropsMap(),
  }
}

export function tdesignReact1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: 'tdesign-react',
    // directives: directives.tdesignReact1,
  }
}
