import ProductItem from './ProductItemAsync';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'Samsung Galaxy S24',
        description: 'Samsung Galaxy S24 Ultra 5G'
    },
    {
        id: 'p2',
        price: 7,
        title: 'Apple Iphone 16',
        description: 'Apple Iphone 16 Pro'
    },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map((product) => (
              <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
              />
          ))}
      </ul>
    </section>
  );
};

export default Products;
