import {AppBar, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, 
  CardActions, Card, CardMedia, CardContent } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  }, 
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position:"relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position:"absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(7)
  },
  cardMedia: {
    paddingTop: "56.25%"
  }
}))


const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  return (
    <>
     <AppBar position="fixed">
       <Container fixed>
          <Toolbar>
            <IconButton edge="start"  
              color="inherit" aria-label="menu" 
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              Three Screen Solutions
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
                Sign Up
              </Button>
          </Toolbar>
       </Container>
     </AppBar>

     <main>
       <Paper className={classes.mainFeaturesPost} 
        style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1" 
                    variant="h3" 
                    color="inherit" 
                    gutterBottom 
                  > Working in 3SS</Typography>
                  <Typography
                    variant="h6" 
                    color="inherit" 
                    paragraph
                  > We are delighted to announce that Connected TV World Summit 2021 will take place as adigital event on 15th-16th June. Registration is now open for the No.1 strategy conference
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
       </Paper>
       <div className={classes.mainContent}>
         <Container maxWidth="md">
           <Typography 
           variant="h2" 
           align="center" 
           color="textPrimary" 
           gutterBottom>
           Create the Future of YOUR Entertainment
           </Typography>
           <Typography 
           variant="h5" 
           align="center" 
           color="textSecondary" 
           paragraph>
           We are delighted to announce that Connected TV World Summit 2021 will take place as adigital event on 15th-16th June. Registration is now open for the No.1 strategy conference. We are delighted to announce that Connected TV World Summit 2021 will take place as adigital event on 15th-16th June. Registration is now open for the No.1 strategy conference
           </Typography>
           <div className={classes.mainButtons}>
             <Grid container spacing={5} 
             justify="center">
               <Grid item>
                 <Button variant="contained" color="primary">Start now</Button>
               </Grid>
               <Grid item>
                <Button variant="outlined" color="primary">Learn more</Button>
               </Grid>
             </Grid>
           </div>
         </Container>
       </div>
       <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map( (card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                      className={classes.cardMedia} 
                      image="https://source.unsplash.com/random" 
                      title="Image title"
                    />
                    <CardContent className={classes.CartContent}>
                      <Typography variant="h5" gutterBottom>
                        Blog post
                      </Typography>
                      <Typography>
                        Blog post. Three Screen Solutions Three Screen Solutions Three Screen SolutionsThree Screen Solutions
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayerIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
            </Grid>
          ))}
        </Grid>
       </Container>
     </main>
    </>
  );
}

export default App;
