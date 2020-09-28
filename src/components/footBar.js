import React from 'react';
import ModalButton from './modalButton';
import PopupExample from './popup/PopupExample';
import PopupModul from './popup/PopupModul';
import Menu from './popup/menu';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function onhandlerClick2  (val)  {
    await sleep(2000);
    console.log ('I AM Clicked in function,  '  + val)
}
const FootBar = () => {
     
    return ( 
        <div className='navBar'>
            <button 
                onClick ={ ()=>
                    onhandlerClick2('JLI')           
                }
            >Click for function call</button>

            <button 
                onClick = {                    
                    async ()=>{
                        await sleep(2000);
                        console.log ('I AM Clicked')
                    }
                }
            >Click for Arrow call</button>
            <PopupModul/>
      
  
        </div>
     );
}
 
export default FootBar;