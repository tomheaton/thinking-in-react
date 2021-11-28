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
        <div style={{textAlign: "left"}}>
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

    const tableRows: ReactChild[] = [];
    let lastCategory: string | null = null;

    products.forEach((product, index) => {
        if (lastCategory !== product.category) {
            tableRows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            );
        }
        tableRows.push(
            <ProductRow product={product} key={product.name} />
        );
        lastCategory = product.category;
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
                {tableRows}
            </tbody>
        </table>
    );
};

const ProductCategoryRow: React.FC<{category: string}> = ({category}) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
};

const ProductRow: React.FC<{product: Product}> = ({product}) => {
    return (
        <tr>
            <td><span style={{color: product.stocked ? "black" : "red"}}>{product.name}</span></td>
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