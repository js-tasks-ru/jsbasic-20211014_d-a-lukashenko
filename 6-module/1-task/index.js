
export default class UserTable {

  constructor(rows) {  
    this.rows = rows;
    this.trElem = ``;
    for (let row of this.rows) {  
      this.trElem += `<tr>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button>X</button></td>
      </tr>`
}   
    this.render();

    let buttons = this.elem.querySelectorAll('button');
    for (let button of buttons) {
      button.addEventListener('click', this.onClick);
    }    
  }

  render() {
    this.elem = document.createElement('table');
    this.elem.innerHTML = 
    `<table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${this.trElem}
    </tbody>
  </table>
`}

  onClick = (event) => {
    let trTarget = event.target.closest('tr');
    trTarget.remove();

}
}

