$(document).ready(function(){
    size=500/12;
    total=12
	base();
});

function base(){
    createGrid(total);
    color();
}

$(".start").click(function() {
    total = prompt("Please enter a number");
    console.log("Total is", total);
    clear();
    size=500/total;
    base();
});

$(".reset").click(function(){
    clear();
    base();
});

function clear(){
    $('.row, .column').remove();
};

function createGrid(total) {
    for (var rowno = 0; rowno < total; rowno++) {
        var $row = $("<div>", {"class": "row"});
        $('.row').css({'height':size + "px"});
        
        for (var columnIndex = 0; columnIndex < total; columnIndex++) {
            var $column = $("<div>", {"class": "column"});
            $('.column').css({'width':size + "px"});
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