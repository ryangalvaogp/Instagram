import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import logo from '../assets/instagram.png'
import camera from '../assets/camera.svg'

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstagramRG" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar Publicação" />
                </Link>
            </div>
        </header>
    )
}