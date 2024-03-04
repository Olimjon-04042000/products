import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from "@mui/material/Typography";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <ul className="products">
        {products.map((product) => (
          <Card className="product" key={product.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.category.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography className="plus-cart" variant="body2" color="text.secondary">
                Price: { product.price}$
                <AddShoppingCartIcon></AddShoppingCartIcon>
              </Typography>
 
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Products;
