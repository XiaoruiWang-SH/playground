interface AppEvents {
  paymentSuccess: {
    orderId: number;
    amount: number;
  };
  userLogin: {
    userId: number;
    username: string;
  };
  userLogout: {
    userId: number;
  };
}

type EventMap = Record<string, object>;
// type ListenerMap<Events> = {
//   [K in keyof Events]?: Array<(payload: Events[K]) => void>;
// };

class TypedEventEmiter<Events extends { [Key in keyof Events]: object }> {
    private listeners = new Map<keyof Events, Array<(payload: any)=>void>>();

  on<K extends keyof Events>(event: K, callback: (payload: Events[K]) => void) {
    const callbacks = this.listeners.get(event);
    if (callbacks === undefined) {
      this.listeners.set(event, [callback]);
      return;
    }
    callbacks.push(callback);
    this.listeners.set(event, callbacks);
  }

  off<K extends keyof Events>(
    event: K,
    callback: (payload: Events[K]) => void,
  ) {
    const callbacks = this.listeners.get(event);
    if (callbacks === undefined) {
      return;
    }
    this.listeners.set(event, callbacks.filter((cb) => cb !== callback));
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]) {
    const callbacks = this.listeners.get(event);
    if (callbacks === undefined) {
      return;
    }
    for (const callback of callbacks) {
      callback(payload);
    }
  }
}

const emitter = new TypedEventEmiter<AppEvents>();
const callback = (data: AppEvents['paymentSuccess']) => {
  console.log('paymentSuccess orderId: ', data.orderId);
  console.log('paymentSuccess amount: ', data.amount);
};
emitter.on('paymentSuccess', callback);
emitter.emit('paymentSuccess', { orderId: 123456, amount: 1000 });
emitter.off('paymentSuccess', callback);
emitter.emit('paymentSuccess', { orderId: 123457, amount: 2000 });
