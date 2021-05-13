import React from "react";
import {Typography, AppBar, CardActions, Button, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Card } from '@material-ui/core';
import {PhotoCamera} from "@material-ui/icons";

import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9,10]; 



const App = () => {
  
    const classes = useStyles();
  
    return(
        
        <>
           <CssBaseline />
           <AppBar  position = "relative" >
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6' >
                        Photo Album
                     </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                  <container maxWidth="sm">
                   
                   <div className={classes.definition}>
                         <Typography variant = "h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                         </Typography>
                    
                        <Typography  variant="h5" align="center" color="textSecondary" paragraph>
                             This is a photo album made by Umarov Jamolkhon. I am trying to make this sentence as long as possible, so we can see how does it look like.
                        </Typography>
                    </div>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item> 
                                <Button className = {classes.btn} variant = "contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item> 
                                <Button className = {classes.btn} variant = "outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                  </container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4}> 
                    { cards.map(( card)=>(
                      
                      <Grid item key={card} xs={12} sm={6} md={4}> 
                        <Card className={classes.card}>
                            <CardMedia 
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="image title"
                            />
                            <CardContent className={classes.CardContent}> 
                                <Typography gutterBottom variant="h5" > 
                                  Heading  
                                </Typography>
                                <Typography>
                                    this is card. you can use this section to describe the content
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>
                        </Card>    
                    </Grid>

                    ) ) }
                        
                    </Grid>

                </Container>

            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align='center' gutterBottom> 
                        Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Created by Umarov Jamolkhon.  

                </Typography>
            </footer>


        </>
    );
}

export default App;