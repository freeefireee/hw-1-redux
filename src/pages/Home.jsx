import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/burger.jpg" alt="" /></Link> </div>
                <div className="name">
                    <h1><Link className='perehod' to="/thirdpost" >Burger</Link></h1>
                    <b className="price">$1</b>

                </div>
                <h6>250 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In corrupti, exercitationem natus quisquam sapiente ullam.</p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>1$</h3>
                    </div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>

                </div>
            </div>

            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="./img/cheeseburger.jpg" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >CheeseBurger</Link></h1>
                    <b className="price">$1,2</b>
                    <br />
                </div><h6>222 Reviews</h6>
                <div className="opis-name"><p className="opis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil cumque perferendis distinctio! Odio, maxime.</p></div>
                <div className="grafic"><div className="year"><h3>1,2$</h3></div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>
                </div>
            </div>

            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/shaurma.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >Roll Burger</Link></h1>
                <b className="price">$2</b>
                <br />
            </div><h6>999+ Reviews</h6>
                <div className="opis-name"><p className="opis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eos voluptas eaque atque ut et.</p></div>
                <div className="grafic"><div className="year"><h3>2$</h3></div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home