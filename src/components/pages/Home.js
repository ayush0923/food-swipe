import React, { useEffect, useState } from 'react'
import './Home.css'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import HomeAppBar from './HomeAppBar'
// import HomeSearch from './HomeSearch'
import axios from 'axios'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));
// import { restaurants } from "../../restaurantsData";
function Home() {
    const [restaurant, setRest] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("cafe");
    useEffect(() => {
        getRestaurants();
    }, [query])
    const getRestaurants = async () => {
        const response = await fetch(
            // entity_id=${query[0]}&entity_type=city&
            `https://developers.zomato.com/api/v2.1/search?city_id=3&q=${query}&count=10`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'user-key': '2ad63f94902019632381f2df301a60cc'
                }
            }
        );
        const data = await response.json();
        setRest(data.restaurants);
    }
    const updateSearch = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    const updateQuery = (e) => {
        e.preventDefault();
        setQuery(search);
    }
    const classes = useStyles();
    return (
        <div className='home'>
            <div className="home-sec">
                <div className="home-heading">
                    <HomeAppBar />
                </div>
                <div className="home-main">
                    <div className='homesearch'>
                        <Paper component="form" className={classes.root} onSubmit={updateQuery}>
                            <IconButton className={classes.iconButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Restaurents"
                                inputProps={{ 'aria-label': 'search restaurents' }}
                                value={search}
                                onChange={updateSearch}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className='cardlist'>

                        {restaurant.map((rest) => (
                            <div className="card">
                                <Card name={rest.restaurant.name} thumb={rest.restaurant.thumb} locality={rest.restaurant.location.locality}
                                    address={rest.restaurant.location.address} />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="home-footer">
                    <SimpleBottomNavigation />
                </div>
            </div>
        </div>
    )
}

export default Home
