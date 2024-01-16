
function newItem(){

    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
       crossOutButton.on("click", deleteListItem);
       function deleteListItem(){
     		li.addClass("delete")
     	}
       $('#list').sortable();
      }
    
    /*$(document).ready(function(){

  $('input').change(function(){
    var input = $(this).val();
    $('ol').append('<li>' + input + ' <i class="fas fa-crossOut"></i> </li>');
    $(this).val('');
  });
  $('ol').on("dblclick",'.crossOut', function(){
    $(this).parent('li').toggleClass('strike');
  });

});*/
    
    
    
    
    
    
    
    
    