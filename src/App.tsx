import React from 'react';
import {observer} from 'mobx-react-lite'
import store from './store';

const App=observer(()=>{
  store.total()
  
    return (
      <div className='App' onMouseEnter={(e)=>store.mouseEvents(e)} onMouseLeave={(e)=>store.mouseEvents(e)} >
        <div className='info' onClick={(e)=>store.mouseEvents(e)}>
        <span>{`{`}</span>
          <span>{`"Clicks" : ${store.storeData.clicks}`}</span>
          <span>{`"MouseOver" : ${store.storeData.MouseOver}`}</span>
          <span>{`"MouseOut" : ${store.storeData.MouseOut}`}</span>
          <span>{`"timestamp" : ${store.storeData.timestamp}`}</span>
          <span>{`"Total" : ${store.storeData.Total}`}</span>
          <span>{`{`}</span>
        </div>
        <div>
          <button onClick={()=>store.reset()}>RESET</button>
          <button onClick={()=>store.setTimeStamp()}>TIMER</button>
        </div>
      </div>
    )
})

export default App;
