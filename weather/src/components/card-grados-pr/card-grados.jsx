import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';


export default function CardGrados() {
    return (
        <Card color="secondary" sx={{ maxWidth: 345 }}>
            <CardActionArea >
                <Typography component="div" variant="h4" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    Miercoles,25
                    <Typography component="p" sx={{ alignSelf: 'flex-end' }}>
                        21:30
                    </Typography>
                </Typography>

                <CardContent>
                    <div className="contenedor-grados">
                        <Typography gutterBottom variant="h2" component="div" >
                            18º
                        </Typography>
                        <div className="vl"></div>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />

                    </div>
                </CardContent>
                <div className="card-temp-footer">
                <CardContent>
                   <Typography  component="p">
                         Chubascos debiles   
                </Typography>
                <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                 <Typography  component="p">
                         Chubascos debiles   
                </Typography>   
                </CardContent>            
               
                </div>
            </CardActionArea>
          
        </Card>
    );
}