import { makeAutoObservable } from "mobx"
import React from "react"


type StoreType={
    clicks:number,
    MouseOver:number,
    MouseOut:number,
    timestamp:any,
    Total:number
}


 class Store{
    storeData:StoreType={
        clicks:0,
        MouseOver:0,
        MouseOut:0,
        timestamp:null,
        Total:0
    }
    constructor(){
        makeAutoObservable(this)
    }
    mouseEvents(event:React.MouseEvent){
        switch(event.type){
            case 'mouseenter':
                this.storeData.MouseOver+=1;
                break;
            case 'mouseleave':
                this.storeData.MouseOut+=1;
                break;
            case 'click':
                this.storeData.clicks+=1
                break;
            
        }
    }
    total(){
        this.storeData.Total=this.storeData.clicks+this.storeData.MouseOut+this.storeData.MouseOver
        if(this.storeData.timestamp!==null){
            setInterval(()=>{
                this.storeData.timestamp=new Date().toLocaleString()
            },1000)
        }
    }
    setTimeStamp(){
        this.storeData.timestamp="time started";
        setTimeout(() => {
            this.storeData.timestamp=new Date().toLocaleString()
        }, 1000);
    }
    reset(){
        this.storeData={
            clicks:0,
            MouseOut:0,
            MouseOver:0,
            timestamp:null,
            Total:0
        }
    }
}

export default new Store()