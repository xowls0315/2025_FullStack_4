// 컴포넌트 태어남: 콜백함수 실행됨
// 컴포넌트 업데이트([] 배열 안에 있는게 변경되면): 콜백함수 실행됨
// 컴포넌트 죽음: 콜백함수의 리턴을 실행함

import { useEffect, useState } from "react";
import Product from "./molecule/Product";
import Loading from "./atom/Loading";
import Button from "./atom/Button";

function App() {
    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((v) => {
                console.log(v);
                setProducts((prev) => v.products); // 여기서 상태 업데이트까지!
                setFilteredProducts((prev) => v.products);
                setCategories((prev) => [
                    "ALL",
                    ...new Set(v.products.map((item) => item.category)),
                ]);
            });
    }, []);

    // 로더 3초만 보여주기
    useEffect(() => {
        setTimeout(() => setShowLoading((prev) => false), 3000);
    }, []);

    useEffect(() => {
        selectedCategory === "ALL"
            ? setFilteredProducts(products)
            : setFilteredProducts(
                  products.filter((v) => v.category === selectedCategory)
              );
    }, [selectedCategory, products]);

    return (
        <>
            {showLoading ? (
                <Loading />
            ) : (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                            margin: 20,
                        }}
                    >
                        {categories.map((v) => (
                            <Button
                                key={v}
                                text={v}
                                active={selectedCategory === v}
                                onClick={() => setSelectedCategory(v)}
                            />
                        ))}
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                        }}
                    >
                        {filteredProducts.map((v) => (
                            <Product key={v.id} {...v} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
