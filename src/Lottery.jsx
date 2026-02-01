import { useState } from "react";
// import './Lottery.css';
import { genticket,sum} from "./Helper";
import Ticket from "./Ticket";



export default function Lottery({n=3,wincondition}) {
    let [ticket,setTicket] = useState(genticket(n));
    let iswinning = wincondition(ticket);

    let buyticket = () => {
       setTicket(genticket(n));
    }
    return (
        <div>
            <h1>Lottery game</h1>
            <div className="ticket">
            <Ticket ticket={ticket} /> 
            </div>
            <br />
            <button onClick={buyticket}>Buy ticket</button>
            <h3>{iswinning ? "You Win!" : "Try Again"}</h3>
        </div>
    );
}