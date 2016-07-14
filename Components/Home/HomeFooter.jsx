import React, {Component} from 'react';


class HomeFooter extends Component {
 render (){
   return (
     <footer className="home-footer">
       <div className="home-social-bar">
         <ul>
           <li><a href="https://github.com/MarcZenn">Github</a></li>
           <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
           <li><a href="">Google+</a></li>
         </ul>
       </div>
     </footer>
   )
 }
}


HomeFooter.propTypes = {
  // propTypes
}


export default HomeFooter
