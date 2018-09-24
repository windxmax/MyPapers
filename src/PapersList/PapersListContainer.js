import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as addPaper from '.././Actions/AddPaper'
import PapersListComponent from './PapersList' //отображает список записок
import PaperAddForm from './PaperAddForm'      //форма добавления 

/*
Контейнер для компонента со списком записок и компонента
с формой доабвления, коннектамом к Store
*/
class PapersListContainer extends Component{
  state = {
    header: '',
    fullText: '',
    showAdd: false
  }
  //Показывать форму ввода
  showAddForm = (e) =>{
    e.preventDefault()
    this.setState({showAdd: !this.state.showAdd})
  }
  //Скрыть форму ввода
  hideAddForm = (e) => {
    e.preventDefault()
    this.setState({showAdd: false})
  }
  //Закидываем в стейт вводимые значения
  myInput = (e) => {
     const { id, value } = e.currentTarget
     this.setState({ [id]: e.currentTarget.value })
  }
  //После добавления записки, очистка полей
  clearState = () => {
    this.setState({ header: '',  fullText: ''})
  }
  render(){
    const { header, fullText } = this.state
    const { myPapers } = this.props.myPapers//список записок :)
    const { addPaper } = this.props.addPaper//фун-иядобавление в store
    return(
      <React.Fragment>

        {this.state.showAdd ?
          <React.Fragment>
            <button
              className='form_add_paper_hide_form_button'
              onClick={this.hideAddForm}>
              Скрыть ввод
            </button>
            <PaperAddForm
              addPaper={addPaper}
              header={header}
              fullText={fullText}
              myInput={this.myInput}
              clearState={this.clearState}
            s/>
          </React.Fragment>
        :
          <button
            className='form_add_paper_show_form_button'
            onClick={this.showAddForm}>
            Создать запись
          </button>
        }
        <PapersListComponent myPapers={myPapers} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>{
  return{
    myPapers: state.myPapers
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addPaper: bindActionCreators(addPaper, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PapersListContainer)
