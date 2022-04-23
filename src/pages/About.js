import icon4 from "../assets/icon4.png"


export default ()=>{
    return  (
        <div className="about">
            <div><span className="span_about">ABOUT US</span>
             <br/>
            <p className="p_about">Get more done with ClickUp tasks.<br/>Plan, organize, 
                and collaborate on any project with powerful <br/> task
                 management that can be customized for every need.</p>
            <input type="email" placeholder=" please write your email" className="input_about"></input>
            </div>
            <div>  <img src={icon4} alt="icon"></img></div>

        </div>
        )
}