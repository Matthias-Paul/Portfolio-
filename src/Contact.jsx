
import {useState} from "react"
import styles from "./contact.module.css";
import phone from "./assets/phone.png";
import letter from "./assets/letter.png";
import location from "./assets/location.png";
export default function Contact({visible}) {



    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "69be12c5-7779-470f-af34-acbd799084c5");
    
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
    
      const data = await response.json();
  
      if (data.success) {
        setResult("Sent");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
     
    
    }

  return (
    <>
      <div id="contact" className={!visible?styles.contact:styles.push}>
        <h3 className={styles.head}> Let&#39;s talk</h3>
        <h4 className={styles.subHead}> Get In Touch</h4>
        <p className={styles.headParagraph}>
          I&#39;m currently available to take on new projects, so feel free to
          send a message about anything that you want me to work on.
        </p>
        <p>You can contact anytime.</p>
        <span>
          
          <img className={styles.icon} src={phone} /> <div className={styles.handle}>+2348054696701</div>
        </span>
        <span>
          
          <img className={styles.icon} src={letter} />
          <div className={styles.handle}>matthiaspaul2004@gmail.com</div>
        </span>
        <span>
          
          <img className={styles.icon} src={location} />
          <div className={styles.handle}>Oyo state, Nigeria.</div>
        </span>


        <div className={styles.message}>
         <form onSubmit={onSubmit}>
         <div className={styles.label}>Your name</div>
         <input  className={styles.input} type="text" name="name" placeholder="Enter your name" required />
         <div className={styles.label}>Email Address</div>
         <input className={styles.input} type="email" name="email address" placeholder="Enter your email address" required/>
         <div className={styles.label}>Write your messages here</div>
         <textarea className={styles.text} name="message" rows="6" placeholder="Enter your message" required/>
       <button type="submit" className={styles.btn}>Send</button>
         </form>
         <span>{result}</span>
     

          </div>


  
      </div>
      <div className={styles.footer}>
      <hr/>
       <p> Term of Services  Privacy Policy Connect with me </p>
       <p>@2024 Matthias paul. All right reserved.</p>
       </div>
    </>
  );
}
