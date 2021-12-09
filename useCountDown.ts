// 倒计时组件 - React hooks实现
import { useEffect, useState } from 'react';

interface TimeProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountDown = (
  total: number, // 总共倒计时多长时间，单位：秒
  options?:{
    interval: number; // 多久执行一次，单位：秒
    onFinish?: () => void; // 倒计时结束后执行的回调函数
  }
):TimeProps => {
  let _intv = null;
  const { interval = 1, onFinish } = options;
  const [remain, setRemain] = useState(total);

  useEffect(() => {
    setRemain(total);
    count();

    return () => {
      if (_intv) {
        clearInterval(_intv);
      }
    }
  }, [total]);

  const count = () => {
    if (_intv) {
      clearInterval(_intv);
    }

    _intv = doInterval(interval * 1000, update);
  };

  const update = () => {
    setRemain(oldTime => {
      if (oldTime <= 0) {
        onFinish && onFinish();
        _intv && clearInterval(_intv);
        return 0;
      }
      return oldTime - 1;
    });
  };

  const ms = Math.abs(remain);
  const reached = ms <= 0;
  const hours = Math.floor(ms / 3600);
  const minutes = Math.floor((ms % 3600) / 60);
  const seconds = (reached ? Math.floor : Math.ceil)(ms % 60);

  return { hours, minutes, seconds };
};

export default useCountDown;


function doInterval(delay, fn) {
  let start = Date.now();
  const res = { id: null };
  res.id = window.requestAnimationFrame(loop);

  return res;

  function loop() {
    res.id = window.requestAnimationFrame(loop);

    if (Date.now() - start >= delay) {
      fn();
      start = Date.now();
    }
  }
}

function clearInterval(res) {
  window.cancelAnimationFrame(res.id);
}
