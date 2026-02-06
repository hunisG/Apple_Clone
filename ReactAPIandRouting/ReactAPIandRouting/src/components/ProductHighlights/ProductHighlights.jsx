import React from "react";
// import"./ProductHighlights.css"



export default function ProductHighlights() {
  return (
    <>
   
      {/* First section starts here */}
      <section className="first-hightlight-wrapper">
        <div className="container">

          <div className="new-alert">New</div>

          <div className="title-wraper bold black">
            iPad Pro
          </div> 

          <div className="links-wrapper">
            <ul>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Order</a></li>
            </ul> 
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
      {/* First section ends here */}

      {/* Second section starts here */}
      <section className="second-hightlight-wrapper">
        <div className="container">

          <div className="new-alert">New</div>

          <div className="title-wraper bold black">
            MacBook Air
          </div> 

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">
            From $999.
          </div>

          <div className="links-wrapper">
            <ul>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Buy</a></li>
            </ul> 
          </div>
        </div>
      </section>
      {/* Second section ends here */}

      {/* Third section starts here */}
      <section className="third-hightlight-wrapper">
        <div className="container">

          <div className="title-wraper bold">
            iPhone 11 Pro
          </div> 

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade-in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Buy</a></li>
            </ul> 
          </div>
        </div>
      </section>
      {/* Third section ends here */}
   
    {/* <div>Hi<div/> */}
     </>
  )
}
