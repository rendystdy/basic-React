import React, { Component } from "react";

const judul = {
    color: "#fff",
    backgroundColor: "lightGreen"
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: "Daftar makanan nusantara",
            dataList: this.props.list,
            test: this.props.test,
            statusRendering: true
        }
        this.handlePesan = this.handlePesan.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handlePesan(value, e) {
        e.preventDefault()
        alert(this.state.daftar)
        alert(value)
    }

    componentDidMount() {
        console.log("Jalan, ComponentDidMount");
    }

    handleChange() {
        this.setState((state, props) => {
            return { statusRendering: !state.statusRendering }
        })
    }

    render() {
        // console.log("Jalan Render");
        // console.log(this.state.statusRendering);
        return (
            <div>
                {this.state.statusRendering === true ? (
                    <div>
                        <h1 style={{ color: "#fff", marginTop: "100px", backgroundColor: "orange" }}>Selamat Datang</h1>
                        <h2 style={judul}>Silahkan pilih makanan</h2>
                    </div>
                ) : (
                    <div>
                        <h1 id="judulDua" >Selamat Tinggal</h1>
                        <h2 className="info">Jangan lupa datang kembali</h2>
                    </div>
                    )}
                <button onClick={this.handleChange}>Change</button>
            </div>
        )
        // return (
        //     <div>
        //         <h2>Makanan Khas Indonesia</h2>
        //         <p>{this.state.daftar}</p>
        //         <p>{this.state.dataList}</p>
        //         <p>{this.state.test}</p>
        //         <a href="/" onClick={(e)=>this.handlePesan("pesan dari Header", e)}>Halaman Header</a>
        //     </div>
        // )
    }
}

export default Header