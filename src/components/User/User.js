import calendar2 from "../../assets/calendar2.png"

export default ()=>{
    return (
        <div class="card2">
  <div class="tools2">
    <div class="circle2">
      <span class="red box2"></span>
    </div>
    <div class="circle2">
      <span class="yellow box2"></span>
    </div>
    <div class="circle2">
      <span class="green box2"></span>
    </div>
  </div>
  <div class="card__content">
    <span>User Info</span>
   
  </div>
  <img src={calendar2} alt="calendar" className="calendar"></img>
</div>
    )
}