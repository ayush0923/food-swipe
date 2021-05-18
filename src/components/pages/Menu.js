import React, { useState, useEffect } from 'react'
import './Menu.css'
import MenuAppBar from './MenuAppBar'
// import MenuSearch from './MenuSearch'
import MenuCard from './MenuCard'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import axios from 'axios'
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
function Menu() {
    const API_ID = "4b4d6f8e";
    const APP_KEY = "109c62aed5804b8aa64177e989098d29";
    const [recipe, setRecipe] = useState([]);
    // const [searchvalue, setSearchValue] = useState('');
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        getMenu();
    }, [query])
    const getMenu = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}&from=0&to=8&calories=591-722&health=alcohol-free`)
        setRecipe(response.data.hits);
        console.log(response.data.hits);
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
        <div className='menu'>
            <div className="menu-sec">
                <div className="menu-heading">
                    <div className="menu-heading">
                        <MenuAppBar />
                    </div>
                </div>
                <div className="menu-main">
                    <div className='menusearch'>
                        <Paper component="form" className={classes.root} onSubmit={updateQuery}>
                            <IconButton className={classes.iconButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Dishes"
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
                        {recipe.map((recipe) => (
                            <div className="card">
                                <MenuCard title={recipe.recipe.label} img={recipe.recipe.image} />
                            </div>
                        ))}

                    </div>
                </div>
                <div className="menu-footer">
                    <SimpleBottomNavigation />
                </div>
            </div>
        </div>
    )
}

export default Menu
