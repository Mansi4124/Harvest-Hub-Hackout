import React, { useState } from "react";
import Seeds from "./Seeds";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Fertilizer from "./Fertilizer";
import All from './All'

const MarketPlace = () => {
    const [selectedCategory, setSelectedCategory] = useState("Seeds");
    const categories = ["All", "Seeds", "Vegetables", "Fruits", "Fertilizer"];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const renderCategoryComponent = () => {
        switch (selectedCategory) {
            case "Seeds":
                return <Seeds />;
            case "Vegetables":
                return <Vegetables />;
            case "Fruits":
                return <Fruits />;
            case "Fertilizer":
                return <Fertilizer />;
            case "All":
                return <All></All>
            // Add more cases for other categories if needed
            default:
                return <div>Select a category to view products</div>;
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
            {/* Sidebar (Categories Tab) */}
            <div style={{
                padding: "20px",
                borderRight: "1px solid #ccc",
                width: "200px",
                height: "100vh",
                overflowY: "auto",
                position: "fixed",
                top: 0,
                left: 0,
                backgroundColor: "#f8f8f8"
            }}>
                <div style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "bold" }}>Category</div>
                <ul style={{ listStyleType: "none", padding: "0" }}>
                    {categories.map((category, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <button
                                onClick={() => handleCategoryClick(category)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: selectedCategory === category ? "lightgreen" : "#333",
                                    textDecoration: "none",
                                    cursor: "pointer"
                                }}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                <div style={{ marginTop: "20px" }}>
                    <label htmlFor="company" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Company</label>
                    <select id="company" name="company" style={{ width: "100%", padding: "5px" }}>
                        <option value="All">All</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <label htmlFor="priceFilter" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Sort by Price</label>
                    <select id="priceFilter" name="priceFilter" style={{ width: "100%", padding: "5px" }}>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{
                padding: "20px",
                marginLeft: "220px",
                flex: 1,
                height: "100vh",
                overflowY: "auto"
            }}>
                {renderCategoryComponent()}
            </div>
        </div>
    );
};

export default MarketPlace;
