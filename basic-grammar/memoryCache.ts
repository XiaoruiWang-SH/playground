interface Value<T> {
    value: T;
    time: number
}

class MemoryCache<T> {
    private cache: Map<string, Value<T>> = new Map();

    get(key: string): T | undefined {
        if (!this.cache.has(key)) {
            return undefined;
        }
        if (this.cache.get(key)!.time + 60 * 1000 < Date.now()) {
          this.cache.delete(key);
          return undefined;
        }
        return this.cache.get(key)!.value;
    }

    set(key: string, value: T) {
        if (this.cache.has(key)) {
            return;
        }
        const obj: Value<T> = {
            value,
            time: Date.now()
        }
        this.cache.set(key, obj);
    }

}


const obj1 = {
    id: "123456",
    name: "Wang"
}

const obj2 = {
  id: '123457',
  name: 'Zhao',
};

const obj3 = {
  id: '123458',
  name: 'Li',
};

const memoryCache = new MemoryCache();
console.log(memoryCache.get(obj1.id)); 
console.log(memoryCache.get(obj2.id)); 
console.log(memoryCache.get(obj3.id)); 
memoryCache.set(obj1.id, obj1)
memoryCache.set(obj2.id, obj2);
memoryCache.set(obj3.id, obj3);

setTimeout(() => {
    console.log(memoryCache.get(obj1.id));
}, 5000);
setTimeout(() => {
    console.log(memoryCache.get(obj2.id)); 
}, 30000);
setTimeout(() => {
    console.log(memoryCache.get(obj3.id)); 
}, 59000);
setTimeout(() => {
  console.log(memoryCache.get(obj1.id));
}, 60000);
setTimeout(() => {
  console.log(memoryCache.get(obj2.id));
}, 61000);
setTimeout(() => {
  console.log(memoryCache.get(obj3.id));
}, 62000);