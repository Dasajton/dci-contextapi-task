import store from "../context/CartContext.jsx";
import Product from "./Product.jsx";

export default function Shop() {
  const { DUMMY_PRODUCTS } = store();
  return (
    <section className="flex flex-col items-center gap-20">
      <h1 className="text-fuchsia-800 text-4xl font-bold text-center">
        Context Outfits for Every Occasion
      </h1>

      <ul className="container mx-auto gap-12 flex flex-wrap justify-around ">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
