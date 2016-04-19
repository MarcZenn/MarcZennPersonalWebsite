import React, {Component} from 'react'


class Homepage extends Component {
  render(){
    return (
      // Background image set to content-container.
      <div className="content-container">
        <div className="smokescreen"></div>
        <div className="copy-container">
          <h1 className="main-header" >Sean De Clercq</h1>
          <button className="btn">Business</button>
          <button className="btn">Blog</button>
        </div>
      </div>
    )
  }
}

// Homepage.propTypes = {
//
// }


export default Homepage
