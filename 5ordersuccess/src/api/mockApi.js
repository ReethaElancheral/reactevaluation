
export function fetchOrderConfirmation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Your order has been placed successfully!",
        orderId: Date.now().toString(),
      });
    }, 1000);
  });
}

