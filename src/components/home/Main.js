import React, { Component } from "react";
import menuMakanan from './lib/Food';

class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "Menu makanan",
         title2: "Menu Minuman",
         title3: 'Terbaik',
         inputValue: "",
         inputKota: "",
         // menuMakanan: [
         //    {
         //       nama: "SOTO LAMONGAN",
         //       harga: 1000
         //    },
         //    {
         //       nama: "BAkSO",
         //       harga: 2000
         //    },
         //    {
         //       nama: "MIE AYAM",
         //       harga: 3000
         //    },
         // ]
      };
      this.handleRubahData = this.handleRubahData.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   // rubahData = () => {
   //    this.setState({
   //       title: "Menu makanan Favorit"
   //    })
   // }

   handleRubahData = () => {
      this.setState((state, props) => {
         return {
            title: props.title2,
            title2: props.title,
            title3: props.title3
         }
      })
   }

   handleChange = (value, e) => {
      // console.log(e.target.value);
      // const eventTarget = e.target.value
      // this.setState((state, props) => {
      //    return {inputValue : eventTarget}
      // })

      this.setState({ [value]: e.target.value })
   }

   render() {
      console.log(this.props.menuMakanan);
      return (
         <div>
            <h3>{this.state.title}</h3>
            <h3>{this.state.title2}</h3>
            <h3>{this.state.title3}</h3>
            <button onClick={() => this.handleRubahData()}>Rubah Data</button>
            <br />
            <br />
            <input type="text" placeholder="Nama" value={this.state.inputValue} onChange={e => this.handleChange("inputValue", e)} />
            <br />
            <input type="text" placeholder="Kota" value={this.state.inputKota} onChange={e => this.handleChange("inputKota", e)} />

            {menuMakanan.map((value, index) => {
               return (
                  <div key={index}>
                     <p>no: {index + 1}</p>
                     <p>Nama Makanan : {value.nama}</p>
                     <p>Harga : {value.harga}</p>
                  </div>
               )
            })}
         </div>
      );
   }
}

export default Main;