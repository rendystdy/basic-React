import React, { Component } from "react";

class Images extends Component {
   render() {
      return (
         <img
            src={this.props.linkImg}
            width={this.props.width}
            alt="gambar-makanan"
            
         />
      );
   }
}

export default Images;