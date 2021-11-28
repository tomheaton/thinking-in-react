import {NextPage} from "next";
import React, {ReactChild} from "react";

type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

const PRODUCTS: Product[] = [
    {category: 'Sporting Goods', price: '£49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '£19.99', stocked: true, name: 'Badminton Racket'},
    {category: 'Sporting Goods', price: '£29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '£99.99', stocked: true, name: 'Laptop'},
    {category: 'Electronics', price: '£399.99', stocked: false, name: 'iPhone 13'},
    {category: 'Electronics', price: '£199.99', stocked: true, name: 'Pixel 5'}
];

const FilterableProductTable: React.FC = () => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={PRODUCTS}/>
        </div>
    );
};

const SearchBar: React.FC = () => {
    return (
        <form>
            <input type={"text"} placeholder={"Search for products"} />
            <br/>
            <p>
                <input type={"checkbox"} />
                {" "}
                Hide out-of-stock items.
            </p>
        </form>
    );
};

const ProductTable: React.FC<{products: Product[]}> = ({products}) => {

    const productRows: ReactChild[] = [];

    products.forEach((product, index) => {
        productRows.push(
            <ProductRow product={product} key={product.name}/>
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {productRows}
            </tbody>
        </table>
    );
};

const ProductCategoryRow: React.FC = () => {
    return (
        <div>

        </div>
    );
};

const ProductRow: React.FC<{product: Product}> = ({product}) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

const FilterableProductTablePage: NextPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Filterable Product Table</h1>
            <FilterableProductTable />
        </div>
    );
}

export default FilterableProductTablePage;