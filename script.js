$(document).ready(function(){
	size=500/12;
	total=12
	createGrid(total);
	basic();
})


$(".start").click(function () {
    total = prompt("Please enter a number");
    console.log("Total is", total);
    size=500/total;
    createGrid(total);
    basic();
});


function createGrid(total) {
    
    for (var rowno = 0; rowno < total; rowno++) {
        // var rowId = "row-" + rowno;
        var $row = $("<div>", {
             "class": "row" 
        });
         $('.row').css({'height':size + "px"});
        for (var columnIndex = 0; columnIndex < total; columnIndex++) {
            // var columnId = rowIndex + "-col-" + columnIndex; //Not needed.
            var $column = $("<div>", {
                "class": "column"
                // "id": columnId
            });
            $('.column').css({'width':size + "px"});
            $row.append($column);

        };
        $(".gridwrapper").append($row);
    };
};

function basic(){
$('.column').mouseenter(function(){
	$(this).css("background-color", "#000220");
});

}