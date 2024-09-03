import classes from "./Home.module.css";

const Testimonal = ()=> {
    return (
        <section className="container mt-5">
            <div className="row">
               <div className="col-md-2"></div>
               <div className="col-md-8 text-center">  
                <img className={classes.test_image} 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpebiXZUYDI2ntXXFgdCM1OmK54zWl3H4GA&s"
                alt=""/>
                <h3>Jennifer Mmesoma</h3>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt, 
                  doloremque optio mollitia molestias voluptatem nisi?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Sit nulla ut deleniti aut assumenda perspiciatis iusto fuga earum adipisci sequi accusamus non ab sunt.
                 
                </p>
               </div>
               <div className="col-md-2"></div>
            </div>
        </section>
    )
}

export default Testimonal;