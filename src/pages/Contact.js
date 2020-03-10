import React from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


function Contact() {
  return (
    <div>
     <div class="row">
            <div class="col-md-2"></div>
            <div class="whitebox col-md-8">
                <h2>Contact</h2>
                <br/>
                <div class="line"></div>
                <br/>
                <br/>
                <form action="https://formspree.io/mbjobrdy" method="POST">
                
                    Name
                    <input class="input1" placeholder="John Smith" type="text" id="" name="name"/>
                    <div class="input">

                    </div>
                    <br/>
                   
                    Email
                    <input class="input1" placeholder="example@gmail.com" type="email" id="" name="_replyto"/>
                    <div class="input">

                    </div>
                    <br/>
                    
                    Message
                    <input class="input2" placeholder="" type="text" id="" name="message"/>
                    <div>
                        <button class="button">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
  );
}

export default Contact;