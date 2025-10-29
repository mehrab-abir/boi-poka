const getStoredIds = (list) =>{
    const storedIds = localStorage.getItem(list);

    if(storedIds){
        const stroedBooksId = JSON.parse(storedIds)
        return stroedBooksId;
    }
    else{
        return [];
    }
}

const addToWishList = (id,list) =>{
    const storedIds = getStoredIds(list);

    if(storedIds.includes(id)){
        alert("This book already exists in the wishlist")
    }
    else{
        storedIds.push(id);
        const updatedWishList = JSON.stringify(storedIds);
        localStorage.setItem("wishList",updatedWishList);
    }
}

const addToReadList = (id,list) =>{
    const storedIds = getStoredIds(list);

    if(storedIds.includes(id)){
        alert("This book already exists in the readlist")
    }
    else{
        storedIds.push(id);
        const updatedReadList = JSON.stringify(storedIds);
        localStorage.setItem("readList",updatedReadList);
    }
}

export {addToWishList,getStoredIds,addToReadList}