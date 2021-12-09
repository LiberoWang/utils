function throttle(fn, time) {
  let timer = null;
  return function() {
    if(!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, time);
    }
  }
}

function testThrottle() {
  console.log(`throttle ${new Date}`);
}

document.addEventListener('mousemove', throttle(testThrottle, 1000));


// 新版本 支持传参

function throttle(fn, time) {
  let timer = null;
  return function(...args) {
    let ctx = this;
    if(!timer) {
      timer = setTimeout(function() {
        fn.apply(ctx, args);
        timer = null;
      }, time);
    }
  }
}

function testThrottle(event) {
  console.log(this);
  console.log(event.type);
  console.log(`throttle ${new Date}`);
}

document.addEventListener('mousemove', throttle(testThrottle, 300).bind({event: 'document'}));