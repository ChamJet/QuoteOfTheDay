import quotes from './quotes.js';
import { useState } from 'react';





function Quote () {
    const [message,setMessage] = useState("Click the button to get a quote");
    let previousQuoteIndex=0;

    function GenerateQuote(){
        let random;
        do { //do random over and over until random doesn't match with previous quote index
            random = Math.floor(Math.random() * quotes.length);
        } while (random === previousQuoteIndex);

        previousQuoteIndex= random;
        setMessage(<blockquote><p>{quotes[random].quote}</p><footer> ~{quotes[random].author}~</footer></blockquote>);
    }

    return(
        <div>
        <p>{message}</p>
        <button onClick={GenerateQuote}>Get Quote</button>
        </div>
    );
}

export default Quote;