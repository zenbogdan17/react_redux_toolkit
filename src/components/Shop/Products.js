import ProductItem from './ProductItem';
import styles from './Products.module.css';

const Products = (props) => {
  const DUMMY_ITEMS = [
    {
      id: '1',
      price: 7,
      title: 'Супер-Товар 1',
      description:
        'Благодаря своему высокому качеству, этот Супер-Товар 1 прослужит вам очень долго.',
    },
    {
      id: '2',
      price: 8,
      title: 'Супер-Товар 2',
      description:
        'Благодаря своему высокому качеству, этот Супер-Товар 2 прослужит вам очень долго.',
    },
    {
      id: '3',
      price: 9,
      title: 'Супер-Товар 3',
      description:
        'Благодаря своему высокому качеству, этот Супер-Товар 3 прослужит вам очень долго.',
    },
  ];

  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
