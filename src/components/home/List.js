import React, { Component } from "react";
import Images from './Images';

class List extends Component {
   render() {
      return (
         <ol>
            <Images linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" width="300" />
            <li>Nasi Padang</li>
            <Images linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" width="200" />
            <li>Bakso</li>
            <Images linkImg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" width="100" />
            <li>Nasi Goreng</li>
         </ol>
      );
   }
}

export default List;