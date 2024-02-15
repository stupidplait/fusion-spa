import { useSelector } from "react-redux";
import { Product } from "../../widgets/Product/Product";
import { Category } from "./Category/Category";

export function CatalogPage() {
    const products = useSelector(state => state.products.items);
    const categories = useSelector(state => state.categories.items);
    console.log(products);

    return (
        <section className="my-10">
            <h1 className="main-title">Каталог</h1>
            <div className="flex gap-2 mb-4">
                <Category name="Все" />
                {categories.map(category => <Category key={category.id} name={category.name} />)}
            </div>
            <div className="items">
                {products.map(product => <Product key={product.id} title={product.title} price={product.price} image={product.imageUrl} />)}
            </div>
        </section>
    );
}