import {ajaxHelper} from '../helper/index';

export {
    fetchAllProducts,
    addNewProduct,
    updateProducts,
    deleteProduct

}
function fetchAllProducts(){
    return (dispatch) =>{
        let getData= ajaxHelper({type: "GET",contentType: "application/json", dataType:"json", url:"Books"})
        getData.then((res)=>{
          if( res.d.length>0){
           var data = res.d;
         dispatch(success(data))
            }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    } 

    function success(data){
        return{
            type : 'BOOK_FETCH',
            payload : data
        }
    }
}
function addNewProduct(product) {
    return (dispatch) => {
        let data={
            title:product.title,
            description:product.description, 
            author:product.author
        }
       let getData= ajaxHelper({type: "POST",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        getData.then((res)=>{
          if(res.d.length>0){
            var data = res.d;
            dispatch(success(data))
          }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    }
    function success(data){
    return {
        type: 'ADD_BOOK',
        payload: data
    };
}
}
function updateProducts(product) {
    debugger;
    return (dispatch) => {
        let data={
            book_id:product.id,
            title:product.title,
            description:product.description, 
            author:product.author
        }
        let getData= ajaxHelper({type: "PUT",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        debugger
        getData.then((res)=>{
            debugger
           if(res.m.length>0){
             var data = res.d;
            dispatch(success(data))
            }
        }).catch((err)=>{
          console.log("error : ",err)
        })
}
        function success(data){
        return {
            type: 'UPDATE_BOOK',
            payload: data
        };
}
}
function deleteProduct(product) {
    return (dispatch) => {
        let data={
            book_id:product.book_id
        }
       let postData= ajaxHelper({type: "Delete",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        postData.then((res)=>{
           if(res.m.length>0){
       dispatch(fetchAllProducts())
        //dispatch(success(data))
          }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    }
   /* function success(data){
        return{
            type:'DELETE_BOOK',
            payload:data
        }
    }*/
}

