import {Link} from "react-router-dom";
import heroImage from "../../Assests/hero.jpg";
import classes from "./Home.module.css"
const Hero=()=> {
    return (
        <section className={`container ${classes.hero_container}`}>
            <div className="row">
                <div className={`col-md-6 ${classes.image_div}`}>
                    <img src={heroImage} alt="hero_image" className={classes.hero_image}/>

                </div>
                <div className="col-md-6">
                  <h3>About us</h3>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt, 
                  doloremque optio mollitia molestias voluptatem nisi?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt.
                  </p>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt, 
                  doloremque optio mollitia molestias voluptatem nisi?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt.
                  </p>
                  <div>
                    <Link className="btn btn-secondary" to="/about">READ MORE...</Link>
                  </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;