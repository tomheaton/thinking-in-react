import {NextPage} from "next";
import React from "react";

type Product = {
    category: string,
    price: string,
    stocked: boolean,
    name: string
}

const PRODUCTS: Product[] = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
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
            <input type={"text"} placeholder={"Search for products"}/>
        </form>
    );
};

const ProductTable: React.FC<{products: Product[]}> = ({products}) => {
    return (
        <div>

        </div>
    );
};

const ProductCategoryRow: React.FC = () => {
    return (
        <div>

        </div>
    );
};

const ProductRow: React.FC = () => {
    return (
        <div>

        </div>
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