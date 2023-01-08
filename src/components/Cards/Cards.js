import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./styles.css";
import { Link } from '@mui/material';

export default function MediaCard({image, text, description, href}) {
  return (
    <Card sx={{ maxWidth: 345 , height:"120%"}}>
      <Link href={href} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="image"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}