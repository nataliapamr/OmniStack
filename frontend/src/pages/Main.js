import React from 'react';
import './Main.css';

import logo from '../assets/logoTindev.svg';
import like from '../assets/likeTindev.svg';
import dislike from '../assets/dislikeTindev.svg';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars1.githubusercontent.com/u/18669373?v=4" alt="" />
                    <footer>
                        <strong>Natalia Paula</strong>
                        <p> Programmer and gamer on free time.</p>
                    </footer>

                    <div className="buttons">
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                    </div>
                </li>


            </ul>
        </div>
    )
}