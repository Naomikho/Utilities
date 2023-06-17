//it's called a queue, but it's built with a linked list
class OrderQueue {

    constructor() {
        this.orders = {};
        this.numOrders = 0;
        this.lastOrderId = "";
        this.currentOrderId = "";
    }

    acceptOrder(order) {
        this.orders[order.Id] = order;
        if(this.numOrders != 0) {
            order.prevOrderRef = this.currentOrder().Id;
            this.orders[this.lastOrderId].nextOrderRef = order.Id;
            this.lastOrderId = order.Id;
        } else {
            this.currentOrderId = "";
            this.lastOrderId = order.Id;
        }
        this.numOrders++;
    }

    completeOrder(orderId) {
        this.currentOrderId = this.orders[orderId].nextOrderRef;
        delete this.orders[orderId];
        this.numOrders--;

        if (this.numOrders == 0)
        {
            this.resetOrderIds();
        }
    }

    cancelOrder(orderId) {
        let orderToCancel = this.orders[orderId];

        if (this.numOrders == 1) {
            delete this.orders[orderId];
            resetOrderIds();
            return;
        }

        if (orderToCancel.nextOrderRef == "") { //if order is the most newly added order
            if (this.numOrders != 1) {
                //remove nextOrderRef from the last element
                let prevOrder = this.orders[orderToCancel.prevOrderRef];
                prevOrder.nextOrderRef = ""
                this.lastOrderId = prevOrder.Id;
            }
        } else {
            let prevOrder = this.orders[orderToCancel.prevOrderRef];
            let nextOrder = this.orders[orderToCancel.nextOrderRef];
            prevOrder.nextOrderRef = nextOrderRef.Id;
            nextOrder.prevOrderRef = prevOrderRef.Id;
        }

        delete this.orders[orderId];
    }

    currentOrder() {
        if (this.numOrders != 0) return this.orders[this.currentOrderId];
    }

    nextOrder() {
        let currOrder = this.orders[this.currentOrderId];
        if (this.numOrders >= 2) return this.orders[currOrder.nextOrderRef];
    }

    resetOrderIds() {
        this.currentOrderId == "";
        this.lastOrderId = "";
    }

  }
