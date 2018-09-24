import React, { Component } from 'react'

//Форма добавления записок
export default class PaperAddForm extends Component{
  state = {enterTrue: true}
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  //Проверка ввода и добавление в store новости
  sendInput = (e) => {
    e.preventDefault()
    const { header, fullText} = this.props
    var obj = {header: header, fullText: fullText}
    obj.header.trim()
    obj.fullText.trim()
    if (obj.header.length == 0){
      obj.header = '...'
    }
    if (obj.fullText.length > 0){
      this.props.addPaper(obj)
      this.props.clearState();
      this.setState({enterTrue: true})
    }else{
      this.setState({enterTrue: false})
      this.inputRef.current.focus();
    }
  }

  render(){
    let header = this.props.header
    let fullText = this.props.fullText
    const { myInput } = this.props
    return(
      <React.Fragment>
        {<form className='form_add_paper' autoComplete="off">
          <input
            className='form_add_paper_input'
            id='header'
            type='text'
            onChange={this.props.myInput}
            placeholder={'Заголовок'}
            value={this.props.header}
          />
          <textarea
            className='form_add_paper_textarea'
            id='fullText'
            onChange={this.props.myInput}
            placeholder={'Текст записи'}
            value={this.props.fullText}
            ref={this.inputRef}>
          </textarea>
          <button
            className='form_add_paper_send_button'
            onClick={this.sendInput}>
            Отправить
          </button>
        </form>}
        {!this.state.enterTrue ?  <div>Заполните поле</div> : ''}
      </React.Fragment>
    )
  }
}
