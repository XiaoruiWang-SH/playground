function debounce<T extends (...args: any[]) => void>(fn: T) {
    let timer: number;
    return function(...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, 500);
    }
}


function search(keyword: string) {
  console.log(keyword)
    return keyword
}

let debouncedSearch = debounce(search);

setTimeout(() => {
    debouncedSearch("h")
}, 100);
setTimeout(() => {
  debouncedSearch('he');
}, 200);
setTimeout(() => {
  debouncedSearch('hel');
}, 300);
setTimeout(() => {
  debouncedSearch('hell');
}, 400);
setTimeout(() => {
  debouncedSearch('hell0');
}, 500);