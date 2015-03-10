$("#add-book").click(function() {
  $("#new-books").append('<div class="new-book">' + 
                               '<div class="form-group">' + 
                                 '<label for="new-title">Book Title</label>' + 
                                 '<input type="text" class="form-control new-title">' + 
                               '</div>' + 
                               '<div class="form-group">' + 
                                 '<label for="new-author-first-name">Author First Name</label>' + 
                                 '<input type="text" class="form-control new-author-first-name">' + 
                               '</div>' + 
                               '<div class="form-group">' + 
                                 '<label for="new-author-last-name">Author Last Name</label>' + 
                                 '<input type="text" class="form-control new-author-last-name">' + 
                               '</div>' + 
                             '</div>');
});

$("form#new-shelf").submit(function(event) {
  event.preventDefault();

  var inputtedShelfName = $("input#new-shelf-name").val();

  var newShelf = { shelfName: inputtedShelfName, books: [] };

  $(".new-book").each(function() {
    var inputtedTitle = $(this).find("input.new-title").val();
    var inputtedAuthorFirst = $(this).find("input.new-author-first-name").val();
    var inputtedAuthorLast = $(this).find("input.new-author-last-name").val();

    var newBook = { title: inputtedTitle, authorFirst: inputtedAuthorFirst, authorLast: inputtedAuthorLast };
    newShelf.books.push(newBook);
  });


  $("ul#shelves").append("<li><span class='shelf'>" + newShelf.shelfName + "</span><span class='btn btn-danger btn-xs pull-right' id='remove'>Remove</span></li>");

  $(".shelf").last().click(function() {
    $("#show-shelf-contents").show();


    $("ul#addresses").text("");
    newShelf.books.forEach(function(book) {
      $("ul#addresses").append("<li>" + "\"" + book.title + "\"" + " by " + book.authorLast + ", " + book.authorFirst + "<span class='btn btn-danger btn-xs pull-right' id='remove'>Remove</span></li>");
    });
  });

  $("input#new-shelf-name").val("");
  $("input.new-title").val("");
  $("input.new-author-first-name").val("");
  $("input.new-author-last-name").val("");
});


function deleteItem() {
    $(this).parent().remove();
  }

$(document).on('click', '#remove', deleteItem);




