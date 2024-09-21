import { MenuProduct } from '../MenuProduct.jsx';

const testProduct = {
  name: "Water",
  price: 10,
  size: 30,
  note: "lekker fris"
};

const meta = {
  component: MenuProduct,
  tags: ['autodocs'],
  args: {
    product: testProduct,
  },
};


export default meta;

export const Default = {
  args: {}
};