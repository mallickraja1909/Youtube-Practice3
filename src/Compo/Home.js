import React from 'react';
import '../Styles/Home.scss';
import vg from "../Assets/2.webp";

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram}
 from 'react-icons/ai';
const Home = () => {
   
  return (
    <>
    <div className='home' id='home'>
    <main>
        <h1>Rjs</h1>
        <p>Solutions for all yours Problems</p>
    </main>
</div>
    <div className='home2'>
<img src={vg} alt="Graphics" />
<div>
    <p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Impedit veniam totam cumque. 
    Vero ratione quibusdam voluptatem harum id, 
    error beatae, mollitia rem quidem veniam numquam
     accusamus eos! Nihil, amet voluptatem!
     </p>


</div>
    </div>

    <div className='home3' id='about'>
<div>

    <h1>Who we are?</h1>
    <p>Lorem ipsum, dolor sit amet
     consectetur adipisicing elit. 
     Consequuntur earum nam accusantium iusto,
      soluta iure at voluptatem obcaecati fugiat
       voluptates, temporibus veritatis. Cum voluptatum
        eaque, culpa nam ducimus sunt distinctio.
        </p>

</div>

    </div>


    <div className="home4" id='brands'>
       <div>
       <br></br>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:'1s'
            }}>
           <AiFillAmazonCircle/>
           <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:'2s'
            }}>
           <AiFillYoutube/>
           <p>Youtube</p>
            </div>
            <div style={{
                animationDelay:'3s'
            }}>
           <AiFillGoogleCircle/>
           <p>Google</p>
            </div>
            <div style={{
                animationDelay:'4s'
            }}>
           <AiFillInstagram/>
           <p>Instagram</p>
            </div>
        </article>
    </div>
    </div>
    </>
  )
}

export default Home;