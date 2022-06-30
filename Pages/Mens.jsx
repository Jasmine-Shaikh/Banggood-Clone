import React from "react";
import Footer from "../components/footer";
import styled from "styled-components";
import products from "../Data/mensProduct.json";
import "./womensPage-style.css";
import { useState } from "react";

const Container = styled.div`
  width: 95%;
  margin: auto;
  // border: 1px solid red;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  font: 20px;
  padding: 10px;
  background-color: #ff6e26;
  color: white;
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;

const Heading = styled.p`
  font-size: 30px;
  margin-left: 40px;
  color: #ff6e26;
  font-weight: "600";
`;

console.log(products);
export default function Mens() {
  const handleSort = (condition, type) => {
    if (condition === "ltoh" && type === "p") {
      products = products.sort((a, b) => a.price - b.price);
    } else if (condition === "htol" && type === "p") {
      products = products.sort((a, b) => b.price - a.price);
    } else if (condition === "Low" && type === "R") {
      products = products.sort((a, b) => a.ratings - b.ratings);
    } else {
      products = products.sort((a, b) => b.ratings - a.ratings);
    }
    if (type === "p") {
      handleDrop(4);
    } else {
      handleDrop(5);
    }
  };

  const handleFilter = (value, type) => {
    if (value === "Black" && type === "C") {
      products = products.filter((product) => {
        return product.color === "Black";
      });
    } else if (value === "Blue" && type === "C") {
      products = products.filter((product) => {
        return product.color === "Blue";
      });
    }

    if (type === "C") {
      handleDrop(0);
    }
  };

  const [open, isOpen] = useState(false);
  const [open1, isOpen1] = useState(false);
  const [open2, isOpen2] = useState(false);
  const [open3, isOpen3] = useState(false);
  const [open4, isOpen4] = useState(false);
  const [open5, isOpen5] = useState(false);

  const handleDrop = (value) => {
    if (value === 0) {
      isOpen(!open);
    } else if (value === 1) {
      isOpen1(!open1);
    } else if (value === 2) {
      isOpen2(!open2);
    } else if (value === 3) {
      isOpen3(!open3);
    } else if (value === 4) {
      isOpen4(!open4);
    } else {
      isOpen5(!open5);
    }
  };
  return (
    <>
      <div style={{ width: "70%", display: "flex", gap: "10px" }}>
        <Heading>Men's Clothing</Heading>
        <p style={{ marginTop: "50px", color: "gray" }}>
        Latest Looks For You
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: "30px",
          width: "95%",
          margin: "auto",
        }}
      >
        <div>
          <>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={() => handleDrop(4)}>
                Sort By Price
                <span style={{ fontWeight: "bold" }}>+</span>
              </div>
              {open4 ? (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => handleSort("ltoh", "p")}
                  >
                    Low To High
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleSort("htol", "p")}
                  >
                    High To Low
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={() => handleDrop(5)}>
                Sort By ratings
                <span style={{ fontWeight: "bold" }}>+</span>
              </div>
              {open5 ? (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => handleSort("Low", "R")}
                  >
                    Low To High
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleSort("High", "R")}
                  >
                    High To Low
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="dropdown">
                <div className="dropdown-btn" onClick={() => handleDrop(0)}>
                  Filter By Color
                  <span style={{ fontWeight: "bold" }}>+</span>
                </div>
                {open ? (
                  <div className="dropdown-content">
                    <div
                      className="dropdown-item"
                      onClick={() => handleFilter("Black", "C")}
                    >
                      Black
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => handleFilter("Blue", "C")}
                    >
                      Blue
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={() => handleDrop(1)}>
                Filter By Categories
                <span style={{ fontWeight: "bold" }}>+</span>
              </div>
              {open1 ? (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    //onClick={() => filterCat("T-Shirts")}
                  >
                    Tshirts
                  </div>
                  <div
                    className="dropdown-item"
                    //onClick={() => filterCat("pants")}
                  >
                    Pants
                  </div>
                  <div
                    className="dropdown-item"
                    //onClick={() => filterCat("Shirt")}
                  >
                    Shirts
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={() => handleDrop(2)}>
                Filter By Brands
                <span style={{ fontWeight: "bold" }}>+</span>
              </div>
              {open2 ? (
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    //onClick={() => filterBrand("Reebok")}
                  >
                    Reebok
                  </div>
                  <div
                    className="dropdown-item"
                    //onClick={() => filterBrand("Nike")}
                  >
                    Nike
                  </div>
                  <div
                    className="dropdown-item"
                    //onClick={() => filterBrand("Adidas")}
                  >
                    Adidas
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        </div>
        <img
          style={{ width: "82%", height: "400px", cursor: "pointer" }}
          src="https://imgaz.staticbg.com/banggood/os/202206/20220623221131_244.jpg.webp"
          alt=""
        />
      </div>
      <Container>
        {products.map((products, i) => (
          <Box key={i}>
            <img
              style={{
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              src={products.image}
              alt=""
            />
            <p style={{ color: "red", fontWeight: "500" }}>
              {" ₹ " + products.price}
            </p>
            <p style={{ color: " #e6b800", fontWeight: "700" }}>
              {"⭐ " + products.ratings}
            </p>
            <p
              style={{
                color: "gray",
                textAlign: "left",
                height: "60px",
                margin: "10px",
              }}
            >
              {products.name}
            </p>
            <Button>Add to cart</Button>
          </Box>
        ))}
      </Container>
      <Footer />
    </>
  );
}
