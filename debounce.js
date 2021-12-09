function debounce(fn, time) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn();
      timer = null;
    }, time);
  }
}

function testDebounce() {
  console.log(`debounce ${new Date}`);
}

document.addEventListener('mousemove', debounce(testDebounce, 300));

// 新版本 支持传参数

function debounce(fn, time) {
  let timer = null;
  return function (...args) {
    let ctx = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(ctx, args);
      timer = null;
    }, time);
  }
}


function testDebounce(event) {
  console.log(this);
  console.log(event.type);
  console.log(`debounce ${new Date}`);
}

document.body.addEventListener('mousemove', debounce(testDebounce, 300));

