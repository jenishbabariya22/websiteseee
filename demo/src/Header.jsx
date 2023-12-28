import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: "15px", boxShadow: " 0 0 10px rgba(0, 0, 0, 0.15)", display: "flex", alignItems: "center" }}>
            <div className="container" style={{ display: "unset" }}>
                <div className="row" style={{ alignItems: "center", display: "flex" }}>
                    <div className="col-3">
                        <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg" alt="" />
                    </div>
                    <div className="col-7">
                        <div>
                            <ul style={{ listStyle: "none", display: "flex", margin: "0" }}>
                                <li style={{ padding: "16px 30px" }}>
                                    <a href="" style={{ display: "flex", alignItems: "center",  color: "#BC8157", fontWeight: "700" }}>Home  <IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "16px 30px" }}>
                                    <a href="" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#858585", fontWeight: "700" }}>Shop <IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "16px 30px" }}>
                                    <a href="" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#858585", fontWeight: "700" }}>Page <IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "16px 30px" }}>
                                    <a href="" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#858585", fontWeight: "700" }}>Blog <IoIosArrowDown /></a>
                                </li>
                                <li style={{ padding: "16px 30px" }}>
                                    <a href="" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#858585", fontWeight: "700" }}>Contact <IoIosArrowDown /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <ul style={{listStyle:"none" ,display:"flex",alignItems:"center",margin:"0"}}>
                                <li style={{paddingRight:"15px",fontSize:"18px"}}>
                                    <MdOutlineSearch />
                                </li>
                                <li style={{paddingRight:"15px",fontSize:"18px"}}>
                                    <FaCartShopping />
                                </li>
                                <li style={{paddingRight:"15px",fontSize:"18px"}}>
                                    <FaRegUser />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )


}

export default Header
