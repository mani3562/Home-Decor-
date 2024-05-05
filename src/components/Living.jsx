import React from 'react'
import './style.css';
import Navbar from './Navbar'
import Footer from './Footer'

function Living() {
  return (
 <div className='root-l'>
      <div className='main-l'>
      <Navbar/>
      <div className='cent-l'>
      <h2 id='li-ro' >Living Room</h2>
      <span id='ho-li'><a href='/'>Home^^ </a>Living Room</span>
      </div>
      </div>
      <div className='root1'>
      <div className='r-items1'>
      <div class="item1">
            <h2>Consectetuer vehicula ab</h2>
            <a id='up-date' href='/' >November 21, 2017 / Lifestyle</a>
            <img id='arch-img' src="./living_img/2-living-room-ideas-hbx060122reganbaker-010-1657042837.jpg" alt=''/>
            <p >Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat …</p>
           <a id='read-li' href='/' >Read More »</a>
        </div>

        <div className='root3'>
        <div className='grid-items'>
          <div className='item'>
          <h2>Taciti hendrerit dis odit incidunt</h2>
            <a id='up-date' href='/'  >November 21, 2017 / Kitchen, Living Room, Reading Room</a>
            <img className='img-items' src="./back_img/taciti.jpg" alt=''/>
            <p >Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem …</p>
            <a id='read-li' href='/'>Read More »</a>
          </div>

          <div className='item'>
          <h2>Fugit quaerat vulputate! Irure.</h2>
            <a id='up-date' href='/' > November 20, 2017 / Living Room</a>
            <img className='img-items' src="./living img/1-cozy-living-room-ideas-0hbx090116hajj03-copy-1647282419-64814eee9007c.jpeg" alt=''/>
            <p  >Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates …</p>
            <a id='read-li' href='/' >Read More »</a>
          </div>

          <div className='item'>
          <h2>Sunt doloremque blandit inven</h2>
            <a id='up-date' href='/'> November 20, 2017 / Living Room</a>
            <img className='img-items' src="./back_img/sunt.jpg" alt=''/>
            <p  >Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros …</p>
            <a id='read-li' href='/' >Read More »</a>
          </div>  

          <div className='item'>
          <h2>Litora aptent magnam laoreet!</h2>
            <a id='up-date' href='/'> November 7, 2017 / Living Room</a>
            <img className='img-items' src="./living_img/pic23-free-img.jpg" alt=''/>
            <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu …</p>
            <a id='read-li' href='/' >Read More »</a>
          </div>
        </div>
        </div>

        <div class="pages">
            <a  class="next page-numbers" href="/kitchen">Next Page <span class="ast-right-arrow">→</span></a>
        </div>
      </div>
      <div className='r-items2'>
      <div class="searchbar" >
                <input type="search" id="search-field" placeholder="Search …" value="" name="s" tabindex="-1"/>   
                <img id="input-img" src="./icon/search.png" alt=''/>
            </div>
        <div class="item6">
            <h2 id='rec-po'>Recent Posts</h2>

            <div class="posts">
            <img className='img-items2' src="./75x75/consect.jpg" alt=''/>
           <div class="post-nm">
           <a href="/" target="_blank" className='conse-ve' >Consectetuer vehicula ab</a><br/>
            <span>In Kitchen, Lifestyle</span>
           </div>
           </div>

           <div class="posts">
            <img className='img-items2' src="./75x75/tuciti.jpg" alt='' />
           <div class="post-nm">
            <a href="/" target="_blank" className='conse-ve' >Taciti hendrerit dis odit incidunt</a><br/>
            <span>In Kitchen, Living Room, Reading Room</span>
           </div>
           </div>

           <div class="posts">
            <img className='img-items2' src="./75x75/sunt.jpg" alt='' />
           <div class="post-nm">
            <a href="/" target="_blank" className='conse-ve' >Sunt doloremque blandit inven</a><br/>
            <span>In Living Room</span>
           </div>
           </div>

           <div class="posts">
            <img className='img-items2' src="./75x75/tuciti.jpg" alt='' />
           <div class="post-nm">
            <a href="/" target="_blank" className='conse-ve' >Fugit quaerat vulputate! Irure.</a><br/>
            <span>In Living Room</span>
           </div>
           </div>

           <div class="posts">
            <img className='img-items2' src="./75x75/litora.jpg"alt='' />
           <div class="post-nm">
            <a href="/" target="_blank" className='conse-ve' >Litora aptent magnam laoreet!</a><br/>
            <span>In Living Room</span>
           </div>
           </div>
           </div>

           <div class="item7">
            <h2 id='rec-po'>Tags</h2>
            <div class="btns" >
                <button class="btn-ed" type="button" >appliances</button>
                <button class="btn-ed" type="button" >architecture</button>
                <button class="btn-ed" type="button" >area</button>
                <button class="btn-ed" type="button" >bed</button>
                <button class="btn-ed" type="button" >bedroom</button>
                <button class="btn-ed" type="button" >chair</button>
                <button class="btn-ed" type="button" >chairs</button>
                <button class="btn-ed" type="button" >decor</button>
                <button class="btn-ed" type="button" >design</button>
                <button class="btn-ed" type="button" >exhaust</button>
                <button class="btn-ed" type="button" >fire place</button>
                <button class="btn-ed" type="button" >frames</button>
                <button class="btn-ed" type="button" >furniture</button>
                <button class="btn-ed" type="button" >garden</button>
                <button class="btn-ed" type="button" >home</button>
                <button class="btn-ed" type="button" >interior</button>
                <button class="btn-ed" type="button" >kitchen</button>
                <button class="btn-ed" type="button" >lifestyle</button>
                <button class="btn-ed" type="button" >lights</button>
                <button class="btn-ed" type="button" >living room</button>
                <button class="btn-ed" type="button" >modern</button>
                <button class="btn-ed" type="button" >outdoor</button>
                <button class="btn-ed" type="button" >plants</button>
                <button class="btn-ed" type="button" >shopping</button>
                <button class="btn-ed" type="button" >sitout</button>
                <button class="btn-ed" type="button" >table</button>
                <button class="btn-ed" type="button" >table top</button>
                <button class="btn-ed" type="button" >wall</button>
            </div>
        </div>
        
      </div>
    </div>


      <Footer/>
  </div>
  )
}

export default Living