import React from 'react'
import classes from './Third.module.css'

const ThirdPost = () => {

    return (
        <div>
            <div className={classes.img}><img src="./img/McDonalds.jpg" alt="" /></div>
            <div className={classes.designcontainer}>
                <div className={classes.container}>
                    <h1>FastFood</h1>
                    <div className={classes.profile}>
                        <img src="./img/McDonaldsLogo.jpg" alt="" />
                        <div className={classes.profile_name}>
                            <h2>McDonald's</h2>
                        </div>
                        <div className={classes.reviews}>
                            <h2>Everywhere in the World</h2>
                        </div>
                    </div>
                    <div className={classes.uxui}>
                        <img src="./img/Donalds.jpg" alt="" />
                        </div>
                </div>
                <div className={classes.second_container}>
                    <h1>Categories</h1>
                    <div className={classes.line}></div>
                    <div  className={classes.web_design}> <h3>Burger (5+1)</h3></div>
                    <div  className={classes.web_design}><h3 >CheeseBuger (3)</h3></div>
                    <div  className={classes.web_design}><h3 >KFC (13)</h3></div>
                    <div className={classes.browse}>
                        <h1>Browse by Teacher</h1>
                        <div className={classes.lini}></div>

                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore voluptates adipisci dignissimos minus doloremque. Sit tenetur at cum similique!</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ThirdPost