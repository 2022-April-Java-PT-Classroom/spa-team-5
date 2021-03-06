import { Route, Switch } from "react-router-dom";

import BioScreen from "../../pages/bio-screen";
import BooksScreen from "../../pages/books-screen";
import ContactScreen from "../../pages/contact-screen";
import HomeScreen from "../../pages/home-screen";
import React from "react";
import ScoresScreen from "../../pages/scores-screen";
import Game from "../game/game";
import ArtCollection from "../art-museumAPI";

const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/game/:score?'} component={Game} />
            <Route exact path={'/bios'} component={BioScreen} />
            <Route exact path={'/scores/:score?'} component={ScoresScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/books'} component={BooksScreen} />
            <Route exact path={'/art'} component = {ArtCollection}/>
        </Switch>
    );
}

export default PageSwitch;