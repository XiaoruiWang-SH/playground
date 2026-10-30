
function throttle<T extends (...args: any[]) => void>(fn: T, timeSpan: number): [(...args: any[]) => void, () => void] {
    let endTime: number = 0;
    let isCancel = false;
    const execute = function (...args: any[]): void {
        if (isCancel) {
            return;
        }
        if (endTime !== 0 && endTime >= Date.now()) {
            return;
        }
        endTime = Date.now() + timeSpan;
        return fn(...args);
    };
    const cancel = function () {
        isCancel = true;
    };
    return [execute, cancel];
}


function trackScroll(height: number) {
  console.log("heigt: ", height);
}

const [throttledFn, cancel] = throttle(trackScroll, 500);

throttledFn(100)
throttledFn(120);
setTimeout(() => {
  throttledFn(200);  
}, 300);

setTimeout(() => {
    throttledFn(500);
}, 500);

setTimeout(() => {
    throttledFn(1000);
}, 550);




