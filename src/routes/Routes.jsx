import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@/pages/Home';
import Story from '@/pages/Story';
import { Navbar } from '@/components/navbar';
import { B } from '../../dist/assets/vendor.4cccd92b';
import { Dashboard } from '@/pages/dashboard';

export default function Routes() {
  return (
    <div className="relative">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/story' component={Story} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
