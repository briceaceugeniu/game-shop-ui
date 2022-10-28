import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const bgImg =
  "https://vignette.wikia.nocookie.net/playstation/images/5/50/Wiki-background/revision/latest/scale-to-width-down/2000?cb=20170526183834";

const GameCard = () => {
  return (
    <Card sx={{ width: 250, height: 350, marginBottom: 10 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{
          objectFit: "contain",
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
        height="140"
        image="https://images.g2a.com/323x433/1x1x0/mount-blade-ii-bannerlord-steam-key-global/5e3a7ade46177c1e96170ba2"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Diablo IV
        </Typography>
        <Chip color="secondary" size="small" label="RPG" /> <hr />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          startIcon={<ShoppingCartIcon />}
        >
          In den Warenkorb
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
