import { MenuProduct } from '../MenuProduct.jsx';

const testProduct = {
  name: "Water",
  price: 10,
  size: 30,
  note: "lekker fris"
};
/**MenuProduct renders a product object.
 * A product contains a name, price, and(optionally) a size and a note.
 */
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