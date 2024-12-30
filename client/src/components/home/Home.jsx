
import { Box, Grid } from '@mui/material';
//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
// import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
            <Box   sx={{
               display: "flex",
               gap: "20px",
               flexWrap: "wrap",
             
               width: "90vw",
           }}>
            <Grid container spacing={2}>
                <Grid  item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                     <Posts />
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default Home;