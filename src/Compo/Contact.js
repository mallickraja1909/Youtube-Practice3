import React from 'react'
import '../Styles/Contact.scss'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
   
        <main>

        <br></br><br></br>
            <h1>Contact Us</h1>
            <br></br><br></br>

            <form>
                <div>
             <label>Name</label>
             <input type="text" required placeholder='Abc'/>
                </div>

                <div>
             <label>Email</label>
             <input type="email" required placeholder='abc123@gmail.com'/>
                </div>

                <div>
             <label>Message</label>
             <input type="text" required placeholder='Tell us about your query.......'/>
                </div>

                <button type='submit'>Send</button>
            </form>

        </main>
    </div>
  )
}

export default Contact