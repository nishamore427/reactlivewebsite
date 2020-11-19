import React from 'react';
import {Route,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Register from './Register';
import Login from './Login';

const App=()=>{
    return(<>
            
            <Switch>
                <Route exact path='/' component={Register}/>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/About' component={About}/>

                
       
            </Switch>
        </>);
}
export default App;