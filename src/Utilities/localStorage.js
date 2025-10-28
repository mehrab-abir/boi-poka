const getStoredIds = () =>{
    const storedIds = localStorage.getItem("wishList");

    if(storedIds){
        const stroedBooksId = JSON.parse(storedIds)
        return stroedBooksId;
    }
    else{
        return [];
    }
}

const addToWishList = (id) =>{
    const storedIds = getStoredIds();

    if(storedIds.includes(id)){
        alert("This book already exists in the wishlist")
    }
    else{
        storedIds.push(id);
        const updatedWishList = JSON.stringify(storedIds);
        localStorage.setItem("wishList",updatedWishList);
    }
}

export {addToWishList}