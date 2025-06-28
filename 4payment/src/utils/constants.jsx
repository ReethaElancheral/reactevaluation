import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'


export const PAYMENT_METHODS = [
  { id: "Cash on Delivery", label: "Cash on Delivery", icon: "💵" },
  { id: "UPI", label: "UPI", icon: "📱" },
  { id: "Debit/Creditcard", label: "Debit/Credit Card", icon: "💳" },
];

export const MOCK_CART = [
  { id: 1, name: "Aashirvaad Atta 5kg", price: 260, quantity: 2, image: img1 },
  { id: 2, name: "Tata Salt 1kg", price: 28, quantity: 1, image: img2 },
  { id: 3, name: "Amul Butter 500g", price: 260, quantity: 1, image: img3 },
];

export const MOCK_ADDRESS = {
  name: "Reetha Mannavan",
  street: "7, kumar nagar, Keeranatham",
  city: "Coimbatore",
  state: "Tamil Nadu",
  pincode: "641035",
};
