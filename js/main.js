var boardID = "SUqESEk1";

var get_board = Trello.boards.get(boardID, function(board){

    var $title = $("<div>")
        .html('<a href="' + board.url + '">' + board.name + '</a>')
        .appendTo(".page-title:first");

    var $desc = $("<div>")
        .html(board.desc)
        .appendTo(".page-desc:first");

    var get_lists = Trello.get("boards/" + boardID + "/lists", function(lists){
        for (var i = 0; i < lists.length; i++) {
            var $category = $("<div>")
                .html('<div class="single-resource-grid category category-' + (i + 1) + '"><div class="image"><div class="cover"><div class="meta"><h3>' + (i + 1) + '. ' + lists[i].name + '</h3></div></div></div></div>')
                .appendTo(".resources:first", "#content");
            
            (function (i) {
                var get_cards = Trello.lists.get( lists[i].id + "/cards", function(cards){
                    for (var j = 0; j < cards.length; j++) {

                        var card_categories = [];

                        for (var k = 0; k < cards[j].labels.length; k++) {
                            card_categories.push(cards[j].labels[k].name);
                        }

                        var $entry = $("<div>")
                            .html('<div class="single-resource-grid category-' + (i + 1) + '"><a href="#1"><div class="image"><div class="cover"><div class="meta"><h3>' + cards[j].name + '</h3><p>' + cards[j].desc + '</p><p>' + card_categories.join(', ') + '</p></div></div></div></a></div>')
                            .insertAfter(".category.category-" + (i + 1), "#content");
                    }
                });
            })(i);
        }
    });
});