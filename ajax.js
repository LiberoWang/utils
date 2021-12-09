
// 参考链接： https://juejin.im/post/6844903618764603399
export default function ajax(params) {
  params.headers = params.headers || {};

  return new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest();
    const method = (params.method || 'GET').toUpperCase();
    const url = params.url;
  
    xhr.open(
      method,
      url,

    )
  })
}