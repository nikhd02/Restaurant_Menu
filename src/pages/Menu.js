// import React, { useState } from "react";
// import { MenuList } from "../data/data";
// import Layout from "./../components/Layout/Layout";
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Dialog,
//   DialogContent,
// } from "@mui/material";

// const Menu = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedDish, setSelectedDish] = useState(null);

//   // Function to open the modal with selected dish details
//   const handleOpen = (menu) => {
//     setSelectedDish(menu);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedDish(null);
//   };

//   return (
//     <Layout>
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {MenuList.map((menu) => (
//           <Card key={menu.name} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
//             <CardActionArea>
//               <CardMedia
//                 sx={{ minHeight: "400px" }}
//                 component={"img"}
//                 src={menu.image}
//                 alt={menu.name}
//               />
//               <CardContent>
//                 <Typography variant="h5" gutterBottom component={"div"}>
//                   {menu.name}
//                 </Typography>
//                 <Typography variant="body2">{menu.description}</Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     mt: 2,
//                   }}
//                 >
//                   {/* Price on the left */}
//                   <Typography variant="h6" component={"div"}>
//                     ₹{menu.price}
//                   </Typography>
                  
//                   {/* Info button on the right */}
//                   <Button
//                     variant="contained"
//                     onClick={() => handleOpen(menu)}
//                   >
//                     More Info
//                   </Button>
//                 </Box>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         ))}
//       </Box>

//       {/* Modal for more information */}
//       {selectedDish && (
//         <Dialog open={open} onClose={handleClose}>
//           <DialogContent>
//             <Typography variant="h4" gutterBottom>
//               {selectedDish.name}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               {/* Add detailed information about the dish */}
//               This dish is traditionally from {selectedDish.origin}. It was created by {selectedDish.creator}. 
//               It has a rich history in {selectedDish.region} cuisine.
//             </Typography>
//             <Button onClick={handleClose} variant="outlined">
//               Close
//             </Button>
//           </DialogContent>
//         </Dialog>
//       )}
//     </Layout>
//   );
// };

// export default Menu;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  // Fetch meals from TheMealDB API
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=` // Searches for all meals
        );
        setMeals(response.data.meals);
        setFilteredMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching the meals", error);
      }
    };
    fetchMeals();
  }, []);

  // Filter meals based on search query
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(
        meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, meals]);

  // Function to open the modal with selected dish details
  const handleOpen = (meal) => {
    setSelectedDish(meal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDish(null);
  };

  return (
    <Layout>
      <Box sx={{ pl: 30,pr: 30,pt: 10, mb: 3 }}>
        <TextField
          label="Search for a meal"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "5px",
            },
            "& .MuiInputLabel-root": {
              color: "#333",
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ddd",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#aaa",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6200ea",
            },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredMeals.map((meal) => (
          <Card key={meal.idMeal} sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {meal.strMeal}
                </Typography>
                <Typography variant="body2">
                  {meal.strCategory} - {meal.strArea}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  {/* Price on the left */}
                  <Typography variant="h6" component={"div"}>
                    ₹{Math.floor(Math.random() * 500)} {/* Example price */}
                  </Typography>
                  
                  {/* Info button on the right */}
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(meal)}
                  >
                    More Info
                  </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Modal for more information */}
      {selectedDish && (
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <Typography variant="h4" gutterBottom>
              {selectedDish.strMeal}
            </Typography>
            <Typography variant="body1" gutterBottom>
              This dish is traditionally from {selectedDish.strArea}. 
              It was created by {selectedDish.strCreator || "unknown creators"}. 
              It has a rich history in {selectedDish.strCategory} cuisine.
            </Typography>
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
};

export default Menu;
