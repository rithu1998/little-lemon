import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <img src='../icon_assests/Logo.svg' alt='logo'></img>
                <ul>
                    <li>
                        <a href='google.com'>Home</a>
                    </li>
                    <li>
                        <a href='google.com'>About</a>
                    </li>
                    <li>
                        <a href='google.com'>Menu</a>
                    </li>
                    <li>
                        <a href='google.com'>Reservations</a>
                    </li>
                    <li>
                        <a href='google.com'>Order Online</a>
                    </li>
                    <li>
                        <a href='google.com'>Login</a>
                    </li>
                </ul>
            </nav>
        )
    }
}