// // declare your functions here...
// $('div')            // element selector
// $('.pics')          // class selector
// $('#baby-ninja')    // id selector
// $('ul li')          // descendant selector
//
// $('parent-tag child-tag:first-child')       // first child
// $('div img:first-child')                    //
// $("img[alt='the beatles making faces']")    // alt tag selector
// $('div:last')                               // last selector
//
// $(document).ready(function() {              // document ready!!!
//
// })
          // lesson code here
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')
}

function firstListItem() {
  return $('#pic-list li:first-child')
}
