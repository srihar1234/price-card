
import './App.css'

function App() {
 
    let data = [
      {scheme:"FREE",
       chargeFees:"$0/month",
       list:" Single User",
       opa1:"100%",
       opa2:"100%",
       opa3:"100%",
       opa4:"100%",
       opa5:"50%",
       opa6:"50%",
       opa7:"50%",
       opa8:"50%",
       sym5:"✖",
       sym6:"✖",
       sym7:"✖",
       sym8:"✖", 
      },
  
      {scheme:"PLUS",
       chargeFees:"$9/month",
       list:" 5 Users",
       opa1:"100%",
       opa2:"100%",
       opa3:"100%",
       opa4:"100%",
       opa5:"100%",
       opa6:"100%",
       opa7:"100%",
       opa8:"50%",
       sym5:"✔",
       sym6:"✔",
       sym7:"✔",
       sym8:"✖", 
      }, 
  
      {scheme:"PRO",
       chargeFees:"$49/month",
       list:" Unlimited Users", 
       opa1:"100%",
       opa2:"100%",
       opa3:"100%",
       opa4:"100%",
       opa5:"100%",
       opa6:"100%",
       opa7:"100%",
       opa8:"100%",
       sym5:"✔",
       sym6:"✔",
       sym7:"✔",
       sym8:"✔",
      }  
    ];
  
    return (
     <div className="container">
      {
        data.map((item,ind)=>(
           <Card key={ind}
           scheme={item.scheme}
           fees={item.chargeFees}
           num={item.list}
           opa1={item.opa1}
           opa2={item.opa2}
           opa3={item.opa3}
           opa4={item.opa4}
           opa5={item.opa5}
           opa6={item.opa6}
           opa7={item.opa7}
           opa8={item.opa8}
           sym5={item.sym5}
           sym6={item.sym6}
           sym7={item.sym7}
           sym8={item.sym8}
           />
        ))
      }
     </div> 
  )
}

export default App


function Card(props){
  console.log(props);
 return(
   <div className="card">
     <div className="header">
       <h3 id="scheme">{props.scheme}</h3>
       <h1>{props.fees}</h1>
       <hr/>
     </div>
     <div className="cardBody">
       <ul>
         <li className="item1" style={{opacity:props.opa1}}>✔{props.num}</li>
         <li className="item2" style={{opacity:props.opa2}}>✔ 50GB Storage</li>
         <li className="item3" style={{opacity:props.opa3}}>✔ Unlimited Public Projects</li>
         <li className="item4" style={{opacity:props.opa4}}>✔ Community Access</li>
         <li className="item5" style={{opacity:props.opa5}}>{props.sym5} Unlimited Private Project</li>
         <li className="item6" style={{opacity:props.opa6}}>{props.sym6}  Dedicated Phone Support</li>
         <li className="item7" style={{opacity:props.opa7}}>{props.sym7}  Free Subdomain</li>
         <li className="item8" style={{opacity:props.opa8}}>{props.sym8}  Monthly Status Reports</li>
       </ul>
     </div>
     <div className="footer">
       <button>BUTTON</button>
     </div>
   </div>
 )
}