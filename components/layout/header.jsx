import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="/logo/logo-white.png" alt="logo" width={150} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/holidays" className="nav-link">Holidays</a></li>
                        <li className="nav-item cta"><a href="/contact" className="nav-link"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
