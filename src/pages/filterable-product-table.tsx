import {NextPage} from "next";
import React, {ReactChild, useState} from "react";

type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

type ProductTableProps = {
    products: Product[],
    search: string,
    filtered: boolean
}

type SearchBarProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    filtered: boolean,
    setFiltered: React.Dispatch<React.SetStateAction<boolean>>
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

    const [search, setSearch] = useState<string>("");
    const [filtered, setFiltered] = useState<boolean>(false);

    return (
        <div style={{textAlign: "left"}}>
            <SearchBar search={search} setSearch={setSearch} filtered={filtered} setFiltered={setFiltered} />
            <ProductTable products={PRODUCTS} search={search} filtered={filtered} />
        </div>
    );
};

const SearchBar: React.FC<SearchBarProps> = ({search, setSearch, filtered, setFiltered}) => {
    return (
        <form>
            <input
                type={"text"}
                style={{minWidth: "300px"}}
                placeholder={"Search for products"}
                onChange={(e) => {setSearch(e.target.value)}}
                value={search}
            />
            <br />
            <p>
                <input
                    type={"checkbox"}
                    onChange={(e) => {setFiltered(e.target.checked)}}
                    checked={filtered}
                />
                {" "}
                Hide out-of-stock items.
            </p>
        </form>
    );
};

const ProductTable: React.FC<ProductTableProps> = ({products, search, filtered}) => {

    const tableRows: ReactChild[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (lastCategory !== product.category) {
            tableRows.push(
                <ProductCategoryRow category={product.category} key={product.category} />
            );
        }
        if (filtered && !product.stocked) {
            return;
        }
        if (search.length === 0 || product.name.toLowerCase().includes(search.toLowerCase())) {
            tableRows.push(
                <ProductRow product={product} key={product.name} />
            );
        }
        lastCategory = product.category;
    });

    return (
        <table style={{minWidth: "300px"}}>
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
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    );
};

const ProductRow: React.FC<{product: Product}> = ({product}) => {
    return (
        <tr>
            <td>
                <span style={{color: product.stocked ? "black" : "red"}}>
                    {product.name}
                </span>
            </td>
            <td>
                {product.price}
            </td>
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