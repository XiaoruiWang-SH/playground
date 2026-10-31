type OrderStatus =
  | 'pending'
  | 'paid'
  | 'shipped'
  | 'done'
  | 'cancelled'
  | 'refunded';
type OrderEvent = 'PAY' | 'CANCEL' | 'SHIP' | 'COMPLETE' | 'REFUND';

const transition: Record<
  OrderStatus,
  Partial<Record<OrderEvent, OrderStatus>>
> = {
  pending: {
    PAY: 'paid',
    CANCEL: 'cancelled',
  },
  paid: {
    SHIP: 'shipped',
    REFUND: 'refunded',
  },
  shipped: {
    COMPLETE: 'done',
  },
  done: {},
  cancelled: {},
  refunded: {},
};

class StateMachine {
  private status: OrderStatus;
  constructor(orderStatus: OrderStatus) {
    this.status = orderStatus;
  }

  getStatus(): OrderStatus {
    return this.status;
  }

  dispatch(orderEvent: OrderEvent): void {
    if (!transition[this.status][orderEvent]) {
      throw new Error("Current order status doesn't support this event");
    }
    this.status = transition[this.status][orderEvent]!;
  }
}

const pendingStatus = new StateMachine('pending');
console.log(pendingStatus.getStatus());
pendingStatus.dispatch('PAY');
console.log(pendingStatus.getStatus());

const pendingStatus2 = new StateMachine('pending');
console.log(pendingStatus2.getStatus());
pendingStatus2.dispatch('CANCEL');
console.log(pendingStatus2.getStatus());

const paidStatus = new StateMachine('paid');
console.log(paidStatus.getStatus());
paidStatus.dispatch('SHIP');
console.log(paidStatus.getStatus());

const paidStatus2 = new StateMachine('paid');
console.log(paidStatus2.getStatus());
paidStatus2.dispatch('REFUND');
console.log(paidStatus2.getStatus());

const doneStatus = new StateMachine('done');
console.log(doneStatus.getStatus());
try {
    doneStatus.dispatch('REFUND');
} catch (err) {
    const error = err as Error;
    console.error('err: ', error.message);
}
console.log(doneStatus.getStatus());