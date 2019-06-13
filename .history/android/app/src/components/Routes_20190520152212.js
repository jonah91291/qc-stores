import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'

export default class PizzaTranslator extends Component {
   constructor(props) {
     super(props);
     const Routes = () => (
      <Router>
         <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "about" component = {About} title = "About" />
         </Scene>
      </Router>
   )
   }
// const Routes = () => (
//    <Router>
//       <Scene key = "root">
//          <Scene key = "home" component = {Home} title = "Home" initial = {true} />
//          <Scene key = "about" component = {About} title = "About" />
//       </Scene>
//    </Router>
// )
// export default Routes