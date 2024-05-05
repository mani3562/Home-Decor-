import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div class="box">
            <div class="box1">
                <h2>ABOUT</h2><br/>
                <p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.</p>
            </div>
            <div class="box2">
                <h2>SOCIAL</h2><br/>
                <div class="btn-ft">
                <button class="btn-ft" ><a href="https://www.facebook.com" ><img class="logo" src="./icon/fb.jpg" alt='' /></a></button>
                <button class="btn-ft" ><a href="https://www.instagram.com" ><img class="logo" src="./icon/instagram.jpg" alt=''/></a></button>
                <button class="btn-ft" ><a href="https://www.twitter.com" ><img class="logo" src="./icon/twitter.jpg" alt=''/></a></button>
                <button class="btn-ft" ><a href="https://www.pinterest.com" ><img class="logo" src="./icon/pinterest.jpg" alt='' /></a></button>
            </div>
            </div>
            <div class="box3">
                <h2>CONTACT US</h2><br/>
                <p>500 Terry Francois St.<br/>
                    San Francisco,<br/>
                    CA 94158<br/>
                    +1-410-555-0134 |<br/>
                    info@example.com<br/>
                    contact@example.com</p>
            </div>
            </div>
      
        
    </footer>

<nav>
<div class="navfoot">
    <p id='cop'>Copyright © 2023 Home Decor | Powered by Home Decor</p>
    <ul>
    <li><a id='nav-a' href="/about" >About Us</a></li>
    <li><a id='nav-a' href="/living">Living Room</a></li>
    <li><a id='nav-a' href="/kitchen">Kitchen</a></li>
    <li><a id='nav-a' href="outdoor">Outdoors</a></li>
    <li><a id='nav-a' href="contact">Contacts</a></li>
    </ul>
</div>
</nav>

</div>    
    
  )
}

export default Footer