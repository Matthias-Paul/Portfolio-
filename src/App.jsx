import { useState } from "react";
import "./App.css"
import Header from "./Header"
import Body from "./Body"
export default function App (){
    const [visible, setVisible] = useState(false);
return(
<>
<Header visible={visible} setVisible={setVisible}/>
<Body visible={visible}/>
</>
)}