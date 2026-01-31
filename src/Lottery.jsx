import { useState } from "react";
import './Lottery.css';
import { genticket,sum} from "./Helper";



export default function Lottery() {
    let [ticket,setTicket] = useState(genticket(3));
    let iswinning = sum(ticket)===15;

    let buyticket = () => {
       setTicket(genticket(3));
    }
    return (
        <div>
            <h1>Lottery game</h1>
            <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyticket}>Buy ticket</button>
            <h3>{iswinning ? "You Win!" : "Try Again"}</h3>
        </div>
    );
}