import { Route, Switch } from "react-router-dom";

import BioScreen from "../../pages/bio-screen";
import BooksScreen from "../../pages/books-screen";
import ContactScreen from "../../pages/contact-screen";
import HomeScreen from "../../pages/home-screen";
import React from "react";
import ScoresScreen from "../../pages/scores-screen";

const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/bios'} component={BioScreen} />
            <Route exact path={'/scores'} component={ScoresScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/books'} component={BooksScreen} />
        </Switch>
    );
}

export default PageSwitch;