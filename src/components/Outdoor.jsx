import React from 'react'
import './style.css'
import Navbar from './Navbar'
import Footer from './Footer'

function Outdoor() {
  return (
    <div className='root-o'>
      <div className='main-o'>
      <Navbar/>
      <div className='cent-l'>
      <h2 id='li-ro'>Outdoors</h2>
      ___________________________________
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe voluptatum ullam iure itaque eveniet sunt minus dolorum. Optio cum sit tenetur. Qui, recusandae iste fuga ut sunt eius beatae.</p> */}
      </div>
      </div>
      <div className='root1'>
      <div className='r-items1'>
      <div class="item1">
            <h2>Icinia soluta. Lacus quas.</h2>
            <a id='up-date' href='/' >November 7, 2017 / Outdoor</a>
            <img id='arch-img-k' src="./outdoor_img/pic04-free-img.jpg" alt=''/>
            {/* <p >Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat …</p> */}
            <p>Dolor sit amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class …</p>
           <a id='read-li' href='/' >Read More »</a>
        </div>

        <div className='root3'>
        <div className='grid-items'>
          <div className='item'>
          <h2>Eleifend sodales molestiae deserunt</h2>
            <a id='up-date' href='/'  >November 2, 2017 / Kitchen, Living Room, Reading Room</a>
            <img className='img-items' src="./outdoor_img/pic06-free-img.jpg" alt=''/>
            {/* <p >Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem …</p> */}
            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor …</p>
            <a id='read-li' href='/'>Read More »</a>
          </div>

          <div className='item'>
          <h2>Crporis quae purus inventore!</h2>
            <a id='up-date' href='/' > October 17, 2017 / Living Room</a>
            <img className='img-items' src='./outdoor_img/pic07-free-img.jpg' alt=''/>
            {/* <p  >Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates …</p> */}
            Luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra. …
            <a id='read-li' href='/' >Read More »</a>
          </div>

          <div className='item'>
          <h2>Natoque odio amet autem parturient</h2>
            <a id='up-date' href='/'> March 15, 2012 / Living Room, Outdoors</a>
            <img className='img-items' src="./outdoor_img/pic21-free-img.jpg" alt=''/>
            {/* <p  >Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros …</p> */}
            <p>Velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a …</p>
            <a id='read-li' href='/' >Read More »</a>
          </div>  

          <div className='item'>
          <h2>Ex maxime quibusdam quam</h2>
            <a id='up-date' href='/'> April 2, 2017 / Fashion, Lifestyle, Living Room, Outdoors</a>
            <img className='img-items' src="./outdoor_img/pic23-free-img.jpg" alt=''/>
            {/* <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu …</p> */}
            <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor …</p>
           <a id='read-li' href='/' >Read More »</a>
          </div>
        </div>
        </div>

        <div class="pages">
            {/* <a  href="/">1</a>
            <a  href="/">2</a>
            <a  href="/">3</a> */}
            <a  class="next page-numbers" href="/contact">Next Page <span class="ast-right-arrow">→</span></a>
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

export default Outdoor