/*
Добавление текста записки
*/
export function addPaper(myPapers) {
  return{
      type: 'ADD',
      add: myPapers
  }
}
