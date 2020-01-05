$(function () {

    function addItem() {
      // I am targeting the shopping list form submit button
      $('#js-shopping-list-form').submit(event => {
        // Stop the form from doing it's default thingy
        event.preventDefault();
        // Create a variable that stores what the user
        // has put into the input and submitted.
        const userAddedItem = $('#shopping-list-entry').val();
        // clear the label (input)
        $('#shopping-list-entry').val('');
        // add a new item to the list of items
        $('.shopping-list').append(`
                          <li>
                              <span class="shopping-item">${userAddedItem}</span>
                              <div class="shopping-item-controls">
                                  <button class="shopping-item-toggle">
                                      <span class="button-label">check</span>
                                  </button>
                                  <button class="shopping-item-delete">
                                      <span class="button-label">delete</span>
                                  </button>
                              </div>
                          </li>`
        );
      });
    };
    
    // This function deletes a list item
    function deleteItem() {
      $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        this.closest('li').remove();
      });
    };
  
    // This function checks a list item label
    function checkItem() {
      $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  
      });
    };
  
    // Run addItem
    addItem();
    // Run deleteItem
    deleteItem();
    // Run CheckItem
    checkItem();
  
  
  });