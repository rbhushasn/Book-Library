import React, { Component } from 'react';
import {connect} from "react-redux";

import {addNewProduct,updateProducts} from '../../actions/index';
import {updateEdit} from '../../actions/edit/edit.index';


class AddProduct extends Component{
constructor(props){
    super(props)
    let id='',
    title = '',
    author = '',
    description=''
    let { edit } = props;
    
    if (edit) {
      id= edit.book_id;
      title = edit.title;
      author = edit.author;
      description= edit.description;
    }
     this.state = {
       id,
      title,
      author,
      description,
    };
};
onChangeForm(f, { target }) {
    this.setState({
      [f]: target.value
    });
};

onAdd(e) {
  e.preventDefault();
  let { id,title, author,description } = this.state,
    { edit } = this.props;
  if (!title || !author||! description) {
    alert('Title ,author and description are required!');
  }
  if (edit) {
    this.props.updateProduct({
      id,title, author,description
    }); 

    
  } else {
    this.props.onAdd({
      title,
      author,
      description
    });
  }
  this.setState({
    id:'',
    title: '',
    author: '',
    description:''
  });
  this.props.history.push('/Book List');
};

render(){
    let {id,title,author,description } = this.state,
    { edit } = this.props
    return(
        <form className={'row-group'}
        onSubmit={this.onAdd.bind(this)}>
       <div  className={'form-group shadow p-3 mb-5 bg-white rounded col-md-10'}>
       <div className={'text-center '}>
       <form className={'shadow-none p-3 mb-5 bg-light rounded col-md-15'}>
         <label >{edit ? 'Update Book' : 'Add Book'} </label>
         </form>
       </div>

          <div
            className={'form-group '}>
            <label>Book Title </label>
            <input
              ref={'name'}
              autoFocus
              value={title}
              onChange={this.onChangeForm.bind(this,'title')}
              className={'form-control'}
              type={'text'}
              placeholder={'Book Title ..'}
            />
          </div>
          <div
            className={'form-group '}>
            <label>Book Author </label>
            <input
            ref={'author'}
            autoFocus
            value={author}
            onChange={this.onChangeForm.bind(this,'author')}
              className={'form-control'}
              type={'text'}
              placeholder={'Book Author..'}
            />
          </div>

          <div
            className={'form-group '}>
            <label>Book Description </label>
            <textarea
            ref={'description'}
            autoFocus
            value={description}
            onChange={this.onChangeForm.bind(this,'description')}
              className={'form-control'}
              type={'text'}
              placeholder={'Book Description ..'}
            />
          </div>

          <div
            className={'btn-group btn-group-toggle '}>
            <button
              className={'btn btn-primary btn-block '}
              type={'submit'}>
               {edit ? 'Update' : 'Add'}
            </button>
          </div>

       </div>
      </form>
    )
}
  
}
export default connect((state)=> {
  return {
    edit: state.editReducer
  };
},
{
  updateProduct:updateProducts,
  onAdd: addNewProduct,
  onEdit: updateEdit
}
)(AddProduct);

