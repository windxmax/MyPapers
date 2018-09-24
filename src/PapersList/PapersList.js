import React, { Component } from 'react'

//Отображает записки
export default class PapersList extends Component{
  render(){
    const myPapers = this.props.myPapers
    const toRender = myPapers.map((curr, i)=>{
      return(
        <li key={i} className='paper_list_mane_some_element'>
          <div className='paper_list_mane_some_element_group_input'>
            <h5 className='paper_list_mane_some_element_group_input_header'>{curr.header}</h5>
            <p className='paper_list_mane_some_element_group_input_fullText'>{curr.fullText}</p>
          </div>
        </li>
      )
    })
    return(
      <div className='paper_list_mane'>
        <ul className='paper_list_mane_ul'>
          {toRender.length !== 0 ? toRender : <div className='paper_list_empty_message'><span>Нет записей</span></div>}
        </ul>
      </div>
    )
  }
}
