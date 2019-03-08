import React from "react";

const Top = () => {

   const handleSubhmit = (value, e) => {
      e.preventDefault()
      alert('Halaman Top Tampil')
      alert(value)
   }

   return <a href="/" onClick={(e)=> handleSubhmit("pesan dari Top", e)}>Halaman Top</a>
}

export default Top