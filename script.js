$(document).ready(function(){
    size=600/12;
    total=12
	basic();
});

function basic(){
    clear();
    createGrid(total);
    color();
}

$(".gridsize").click(function() {
    total = prompt("Please enter a number");
    size=600/total;
    basic();
});

$(".reset").click(function(){
    basic();
});

function createGrid(total) {
    for (var rowno = 0; rowno < total; rowno++) {
        var $row = $("<div>", {"class": "row", 'height':size + "px"});
        // $('.row').css({'height':size + "px"});
        
        for (var columnIndex = 0; columnIndex < total; columnIndex++) {
            var $column = $("<div>", {"class": "column", 'width':size + "px"});
            // $('.column').css({'width':size + "px"});
            $row.append($column);
        };
        $(".gridwrapper").append($row);
    };
};

function color(){
    $('.column').mouseenter(function(){
    	$(this).css("background-color", "red");
    });
    uncolor();
}

function uncolor(){
    $('.column').click(function(){
        $(this).css("background-color", "white");
    });
}

function clear(){
    $('.row, .column').remove();
};