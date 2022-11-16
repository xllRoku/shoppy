import Item, { ItemProps } from "../item/Item";
import styles from "./Category.module.css";

type CategoryProps = {
  category: ItemProps[];
};

const Category = ({ category }: CategoryProps) => {
  return (
    <section className={styles.category}>
      <h2 className={styles.categoryHd}>Fruits and Vegetables</h2>
      <div className={styles.containerItems}>
        {category.map(({ imageUrl, title }) => (
          <Item imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </section>
  );
};

export default Category;
