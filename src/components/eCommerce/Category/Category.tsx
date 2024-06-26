import { ICategory } from "@/types";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ title, img, prefix }: ICategory) => {
  return (
    <article className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <header className={categoryImg}>
        <img
            src={img}
            alt={title}
          />
        </header>
        <section>
          <h4 className={categoryTitle}>{title}</h4>
        </section>
      </Link>
    </article>
  );
}

export default Category