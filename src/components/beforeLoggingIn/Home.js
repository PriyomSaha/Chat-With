import React from 'react'
import Header from './Header';
import Image from 'react-bootstrap/Image';
import MainLogo from "../logos/Chat-With-logos_transparent.png";
export default function Home() {
    const design = {
        background: '#F2EEE4',
        height:'100vh',
        color:'#5065A8'
    };
    return (
        <div style={design}>
            <Header />
            <div>
            <h1 className="mt-5">Welcome To</h1>
            <Image src={MainLogo} className="logoBody mt-5"/>
            </div>
        </div>
    )
}
