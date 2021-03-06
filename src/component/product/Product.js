import React, {Component} from 'react';
import {fetchAllProducts,updateProducts, deleteProduct,addNewProduct} from '../../actions/index';
import {updateEdit} from '../../actions/edit/edit.index';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';



class Product extends Component{

    constructor(props){
        super(props);
        this.state ={
            products : [],
            show : false,
            obj : {}
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose (){
        this.setState({show : false});
    }
    handleShow(product){
        this.setState({show : true,obj:product});
    }
    
    onDetails(product) {
        this.handleShow(product);
    };

    onEdit(product) {
        this.props.onEdit(product);
        this.props.history.push('/Add');
    };
    
    onDelete(product) {
        this.props.onDelete(product);
    };
      
    componentDidMount(){
        this.props.fetchProducts();
    }

    render(){
        const productsArr = this.props.products; 
        
        return(<div>
            
            <div class="row mt-2" >
            
                  { productsArr.length > 0 ?  productsArr.map((product,index) => {
                    
                     return(
                        <div className="col-md-6 py-3">
                        <div className={'shadow-sm p-1 mb-1 bg-white rounded '} >
                        <div class="card">
                         
                    <div class="card-header">{product.book_id}{".  "}{product.title} </div>
                    <div class="card-body">
                    <p class="card-text">{product.description}</p>
                    <h6 class="card-title text-right">By: {product.author}</h6>
                    </div>
                    <div class="card-footer">
                <button
              onClick={this.onDetails.bind(this,product)}
              className={'btn btn-outline-info btn-sm float-right'}
              type={'button'}>
              {'Details'}
            </button> 
           {"  "}
            <button
              onClick={this.onDelete.bind(this, product)}
              className={'btn btn-outline-danger btn-sm float-right'}
              type={'button'}>
              {'Remove'}
            </button>
            {"  "}
            <button
              onClick={this.onEdit.bind(this, product)}
              type={'button'}
              className={'btn btn-outline-primary btn-sm float-right'}>
              Edit
            </button>
            </div>
             </div>      
                     </div>
                     </div>
                     ) 
                     
                    }) : 'Book is Loading......' }
                  <form className={"form-group shadow p-3 mb-5 bg-light rounded"} >
              <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.obj.book_id}. {this.state.obj.title}</Modal.Title>
              </Modal.Header>
              {this.state.obj !=null ? 
              <Modal.Body>{this.state.obj.description}<br/><br/><div className={"text-right"}>
              By :{this.state.obj.author} </div>
              </Modal.Body> : 'No data'}
              <Modal.Footer>
                <button className={"btn btn-outline-secondary"} onClick={this.handleClose}>Close</button>
              </Modal.Footer>
            </Modal>
    </form>
            </div>
        </div>)
        
    }
}

export default connect((state)=> {
    return {
        products : state.productReducer.products
    };
},

{
    fetchProducts:fetchAllProducts,
    updateProduct:updateProducts,
    onAdd: addNewProduct,
    onEdit: updateEdit,
    onDelete:deleteProduct
  }
)(Product);
