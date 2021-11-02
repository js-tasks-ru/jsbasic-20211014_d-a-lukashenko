function highlight(table) {

let thead = table.querySelector('thead');

let headTd = thead.querySelectorAll('td');

let tbody = table.querySelector('tbody');

  for (let i = 0; i < headTd.length ; i++) {

    let cell = headTd[i];
      
    if (cell.textContent === 'Age') {
            
      let trs = tbody.querySelectorAll('tr');
        
      for (let tr of trs) {
               
        let tds = tr.querySelectorAll('td');
       
        let tdAge = tds[i].textContent;
        
        if (tdAge < 18) {
          tr.style.textDecoration = 'line-through';
        }
      }
    } else if (cell.textContent === 'Gender') {
      
      let trs = tbody.querySelectorAll('tr');

      for (let tr of trs) {
        
        let tds = tr.querySelectorAll('td');
        let textTdGender = tds[i].innerHTML;
       
        if (textTdGender === 'm') {
          tr.classList.add('male');
        }
        else if (textTdGender === 'f') {
          tr.classList.add('female');
        }
      }
    } else if (cell.textContent === 'Status') {
      let trs = tbody.querySelectorAll('tr');
      for (let tr of trs) {   
        let tds = tr.querySelectorAll('td');
        let tdStatus = tds[i].dataset.available;
        if (tdStatus === 'true') {
          tr.classList.add('available');
        }
        else if (tdStatus === 'false') {
          tr.classList.add('unavailable');
        }
        else {
          tr.hidden = true;
        }
      }
    }
  }

}
