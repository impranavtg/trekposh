import React,{ useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaTelegramPlane} from 'react-icons/fa'
import '../Css/Form.css';
const Form = () => {
  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_br2ktzq","template_95tyv5u",e.target,"usWXqCPIoEN-H_1Dv").then(res=>{
      // console.log(res);
      toast.success("Yay! Message sent",{position:"top-right"});
    }).catch(err=>{
      console.log(err)
      toast.error("Server Error! Please try again",{position:"bottom-right"})
    }
      )
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  }
  return (
    <section id="contact">
    <div className="formHead">
        <h1 className="Heading">Contact Us</h1>
    </div>
    {/* action="https://submit-form.com/e0Rdhxxo" */}
     <form onSubmit={handleSubmit} method="POST" className="formContainer"> 
        <input type="hidden" name="_append" value="false" />

        <div><input type="text" placeholder="Enter your Name" name="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" placeholder="Enter your Number" name="Mob_Number" required value={number} onChange={(e)=>setNumber(e.target.value)}/> </div>
        <input type="email" placeholder="Enter your Email" name="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <textarea className="sameAsTextarea" name="Message" id="" cols="30" rows="10" placeholder="Your Message" required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type="submit" className="sendMessage">Send Message <FaTelegramPlane/> </button>
        </form>
        
       </section>
  )
}

export default Form;