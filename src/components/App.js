import React from 'react';
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import Badges from '../pages/Badges'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Layout from './Layout';
import NotFound from '../pages/NotFound'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;