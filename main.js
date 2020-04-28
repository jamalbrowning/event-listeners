
const pies = [
  {
    type:'Key Lime',
    size: 'Family',
    crust: 'Lattuce',
    price: 30,
    imageUrl: 'https://www.onceuponachef.com/images/2019/06/Key-Lime-Pie-760x948.jpg',
    owner: 'jamal'
    
  },
  {
    type:'Apple',
    size: 'Personal',
    crust: 'Basic',
    price: 3,
    imageUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2014/09/apple-pie-horiz-a-1800.jpg',
    owner: 'elizabeth'
    
  },
  {
    type:'Blueberry',
    size: 'Regular',
    crust: 'Crumb',
    price: 20,
    imageUrl: 'data:image/jpeg;base64,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',
    owner: 'jamal'
    
  },
  {
    type:'meat pie',
    size: 'small',
    crust: 'basic',
    price: 600,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl8EH1Jg1_W_ShKduScyXO7teJspN3xTLd42IiDNStKLM0-Hl2&usqp=CAU',
    owner: 'ester'
    
  },
];

/*
1. Make 4 buttons: 1 for each instructor, and 1 for "all pies"
2. when you click on a button, do the filter thing
  a. console.log out a button click
  b. filter collection?
3. Reprint the dom with the filtered pies?
*/
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = '';
  for (let i = 0; i < pieCollection.length; i++) {
    domString += `
      <div class='pie'>
        <h2>${pieCollection[i].type}</h2>
        <img src='${pieCollection[i].imageUrl}' alt='image of ${pieCollection[i].type} pie'>
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i]}</p>
      </div>`
  };
  printToDom('#pieContainer', domString)
};
const filterPiesEvent = (event) => {
  
  const buttonId = event.target.id
  const tempPieCollection = [];
  
  if (buttonId == 'all'){
    buildPies(pies);
    return;
  }

  for (let i = 0; i< pies.length; i++) {
    if (pies[i].owner === buttonId){
      tempPieCollection.push(pies[i])     
    } 
  }
  buildPies(tempPieCollection)
};

const clickEvents = () => {
 document.querySelector('#jamal').addEventListener('click', filterPiesEvent );
 document.querySelector('#elizabeth').addEventListener('click', filterPiesEvent );
 document.querySelector('#ester').addEventListener('click', filterPiesEvent );
 document.querySelector('#all').addEventListener('click',  filterPiesEvent)
};

const init = () => {
  buildPies(pies)
  clickEvents();
};

init()
