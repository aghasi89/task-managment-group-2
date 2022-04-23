import icon2 from "../assets/icon2.png"

export default ()=>{
    return (
        <>
        <h1>CONTACT WITH US</h1>
        <div>  <img className="img_contact" src={icon2} alt="icon"></img></div>

        <ul>
  <li>
    <a class="facebook" href="#">
      <span>FACEBOOK</span>
      <span></span>
      <span></span>
      <span></span>
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a class="twitter" href="#">
      <span>TWITTER</span>
      <span></span>
      <span></span>
      <span></span>
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a class="instagram" href="#">
      <span>INSTAGRAM</span>
      <span></span>
      <span></span>
      <span></span>
      <i class="fa fa-instagram" aria-hidden="true"></i>
    </a>
  </li>
  <li>
    <a class="google" href="#">
      <span>GOOGLE</span>
      <span></span>
      <span></span>
      <span></span>
      <i class="fa fa-google-plus" aria-hidden="true"></i>
    </a>
  </li>
</ul>
        </>
    )
}