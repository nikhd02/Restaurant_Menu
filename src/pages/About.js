import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to [Your Restaurant Name]</Typography>
        <Typography variant="body1" paragraph>
          At [Your Restaurant Name], we invite you to embark on a culinary journey that celebrates the rich flavors and traditions of [Cuisine Type]. Located in the heart of [City/Neighborhood], our restaurant offers a unique dining experience where passion for food meets exceptional service.
        </Typography>
        
        <Typography variant="h5" paragraph>Discover Our Menu</Typography>
        <Typography variant="body1" paragraph>
          Explore our diverse menu, thoughtfully crafted to highlight the essence of [Cuisine Type] cuisine. From traditional favorites to innovative dishes, each meal is made with the freshest ingredients, bringing you authentic flavors and a touch of culinary artistry. Our menu features:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Appetizers:</strong> Start your meal with a selection of delectable starters that set the tone for the rest of your dining experience.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Main Courses:</strong> Savor our carefully prepared main dishes, each one a masterpiece that captures the essence of [Cuisine Type].
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Desserts:</strong> End your meal on a sweet note with our irresistible desserts, crafted to delight your taste buds.
        </Typography>

        <Typography variant="h5" paragraph>An Inviting Atmosphere</Typography>
        <Typography variant="body1" paragraph>
          Step into a welcoming ambiance where every detail is designed to enhance your dining experience. Our restaurant blends modern elegance with traditional charm, creating a comfortable and sophisticated setting perfect for any occasion—whether it's a casual lunch, a romantic dinner, or a special celebration.
        </Typography>

        <Typography variant="h5" paragraph>Exceptional Service</Typography>
        <Typography variant="body1" paragraph>
          At [Your Restaurant Name], we pride ourselves on providing exceptional service that makes every guest feel valued. Our friendly and knowledgeable staff are dedicated to ensuring that your visit is memorable, offering personalized recommendations and attentive care.
        </Typography>

        <Typography variant="h5" paragraph>Join Us</Typography>
        <Typography variant="body1" paragraph>
          We invite you to visit us and experience why [Your Restaurant Name] is a beloved destination for food enthusiasts in [City/Neighborhood]. Whether you’re a local or just passing through, we promise a dining experience that exceeds expectations and leaves you looking forward to your next visit.
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for choosing [Your Restaurant Name]. We look forward to serving you!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
