const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event 
itemList.addEventListener('click', removeItem);

// filter event 
filter.addEventListener('keyup', filterItems);


// addItem function 
function addItem(e) {
    e.preventDefault();

    // get input value 
    var newItem = document.getElementById('item').value;
    
    // create  new li element 
    var li = document.createElement('li');

    // add className
    li.className = 'item-group-list';

    // add textNode with input value 
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var deleteBtn = document.createElement('button');

    // append text node 
    deleteBtn.appendChild(document.createTextNode('x'));

    // deleteBtn class name add 
    deleteBtn.className = 'delete';

    // li append deleteBtn
    li.appendChild(deleteBtn)

    // itemlist li add 
    itemList.appendChild(li);

};


// removeItem fonction return
function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            // itemList li remove 
            itemList.removeChild(li);

        }
    }
};


// filterItems function return
function filterItems(e){
    
    // convert text LowerCase or value get 
    var text = e.target.value.toLowerCase();
    
    // get lis 
    var items = itemList.getElementsByTagName('li');

    // items convert to array 
    Array.from(items).forEach(function(item){
        
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    
};