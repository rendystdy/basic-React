import React, { Component } from "react";

class CustomInput extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "Custom Input"
      };
      this.handleReset = this.handleReset.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.textInput = React.createRef();
   }


   handleReset() {
      this.setState({ value: "" })
      this.textInput.current.focus();
   }

   handleChange(e) {
      this.setState({
         value: e.target.value
      })      // this.myRef.current.focus()
      // this.textInput.current;
   }

   render() {
      return (
         <div>
            <input type="text" onChange={e => this.handleChange(e)} value={this.state.value} ref={this.textInput} />

            <button onClick={this.handleReset}>Kirim Data</button>
         </div>
      );
   }
}

export default CustomInput;