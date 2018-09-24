import React, { Component } from 'react'

import PapersListContainer from './PapersList/PapersListContainer'

export default class PapersMane extends Component{

  render(){
    return(
      <React.Fragment>
        <div className='header'>
          <h3 >Мои Записи</h3>
        </div>
        <main>
          <div className='main_container'>
            <PapersListContainer />
          </div>
        </main>
      </React.Fragment>
    )
  }
}
