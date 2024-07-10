import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, TextField } from '@mui/material';
import { orderCake } from '../src/Redux/cakeActions';
import { restockCake } from '../src/Redux/cakeActions';
function App() {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [restock, setRestock] = useState(5);
  const handleOrderCakes = () => {
    dispatch(orderCake(quantity));
  };
  const handleRestock = () => {
    dispatch(restockCake(restock))
  }
  return (
    <Box sx={{
      width: "100%",
      height: "100vh",
      backgroundColor: "#36C2CE",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Box sx={{
        width: "30%",
        height: "60%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant='h1'>{numberOfCakes}</Typography>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          sx={{ margin: "10px" }}
          label="Quantity"
          InputProps={{ inputProps: { min: 1 } }}
        />
        <Button
          onClick={handleOrderCakes}
          sx={{
            backgroundColor: "#478CCF",
            color: "white",
            '&:hover': {
              backgroundColor: "#478CCF",
            },
          }}
        >
          Order Cakes
        </Button>
        <TextField
          type="number"
          value={restock}
          onChange={(e) => setRestock(Number(e.target.value))}
          sx={{ margin: "10px" }}
          label="Restock"
          InputProps={{ inputProps: { min: 1 } }}
        />
         <Button
          onClick={handleRestock}
          sx={{
            backgroundColor: "#478CCF",
            color: "white",
            '&:hover': {
              backgroundColor: "#478CCF",
            },
          }}
        >
          Restock Cakes
        </Button>
      </Box>
    </Box>
  );
}

export default App;
