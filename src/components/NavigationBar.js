import React from "react";


function NavigationBar(){

    return(
        <>
        
        <nav className="p-2 m-3 text-dark">
            <div class="container-fluid">
                <strong>
                <a class="navbar-brand" href="#">KIT SARL</a>
                </strong>
            </div>
        <ul class="nav text-light justify-content-end">
    <li class="nav-item">
      <p><a style={{color: 'black'}} class="nav-link" href="#">WELCOME</a></p>
    </li>
    <li class="nav-item">
    <p><a style={{color: 'black'}} class="nav-link" href="#">WHO ARE WE?</a></p>
    </li>
    <li class="nav-item">
    <p><a style={{color: 'black'}}  class="nav-link" href="#">AIR CONDITIONER</a></p>
    </li>

    <li class="nav-item dropdown">
    <a style={{color: 'black'}}  class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">OUR SKILLS</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Solar</a></li>
      <li><a class="dropdown-item" href="#">Ups</a></li>
      <li><a class="dropdown-item" href="#">Solar Inverter</a></li>
      <li><a class="dropdown-item" href="#">Battery</a></li>
      <li><a class="dropdown-item" href="#">Generator</a></li>

    </ul>
  </li>

  <li class="nav-item">
    <p><a style={{color: 'black'}} class="nav-link" href="/contact">CONTACT US</a></p>
  </li>

  </ul>
  </nav>
    <h2 
    style={{fontSize: '2rem', textAlign: 'left', marginBottom:'2rem'}} 
    >WHO ARE WE?</h2>
    <div>
        <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHNlYXJjaHwxfHxTb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE2OTc1MjMzNzB8MA&ixlib=rb-4.0.3&q=80&w=1080"
        class='d-block mx-auto' />
    </div>
    </>
)
}
export default NavigationBar