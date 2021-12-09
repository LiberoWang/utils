import { Promise } from 'es6-promise';

require('core-js/modules/es6.array.from');
require('core-js/modules/es6.array.find');

export default function loadScript(url) {
  let script = Array.from(document.scripts).find((s) => s.src === url);
  if (script) {
    return Promise.resolve(url)
  }
  // script有onload方法，监听是否加载完毕
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.addEventListener('load', () => resolve(url), false);
    script.addEventListener('error', () => reject(url), false);

    script.src = url;
    document.body.appendChild(script);
  })
}