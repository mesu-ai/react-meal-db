const getDb=()=>localStorage.getItem('order_cart');

const updateDb=(value)=> localStorage.setItem('order_cart',JSON.stringify(value));

const addToDb=(item)=>{
    const exists=getDb();
    let order_cart={};

    if(!exists){
        order_cart[item]=1;

    }else{
        
        order_cart=JSON.parse(exists);

        if(order_cart[item]){
            const newCount=order_cart[item]+1;
            order_cart[item]=newCount;

        }else{
            order_cart[item]=1;
        }


    }

    updateDb(order_cart);

}

const removeFromDb=(item)=>{
    const exists=getDb();
    if (!exists) {
        
    } else {
        const order_cart=JSON.parse(exists);
        delete order_cart[item];
        updateDb(order_cart);
        
    }

}

const getStoredDb=()=>{
    const storeDb=getDb();
    return storeDb? JSON.parse(storeDb):{};
}



export{addToDb,removeFromDb,getStoredDb};

