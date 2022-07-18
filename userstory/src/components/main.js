import './InventoryGrid2';
 const list = document.querySelector('.list');

 const sort_name_btn = document.querySelector('.sort-options .sort-name');
 const sort_left_btn = document.querySelector('.sort-options .sort-left');
 const sort_needed_btn  = document.querySelector('.sort-options .sort-needed');
 const sort_more_btn = document.querySelector('.sort-options .sort-more');

 let list_items = [
    {
        name: 'Ketchup',
        left: '3',
        needed: '5',
        more: '2'
    },
    {
        name: 'Onions',
        left: '2',
        needed: '5',
        more: '3'
    },
    {
        name: 'Flour',
        left: '5',
        needed: '3',
        more: '-2'
    },
    {
        name: 'Eggs',
        left: '90',
        needed: '5',
        more: '-85'
    },
    {
        name: 'kk',
        left: '3',
        needed: '5',
        more: '2'
    }
 ];
function displayList (array = []) {
    list.innerHTML = "";
    
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('list-item');

        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.name;

        item_element.appendChild(title);

        list.appendChild(item_element);
    }
}
