export type CartContent = {
  items: {
    productId: string;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    displayTotalPrice: string;
  }[];
  grandTotal?: number;
  displayGrandTotal?: string;
};
