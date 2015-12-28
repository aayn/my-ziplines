/**
 * Created by aayn on 12/26/15.
 */
var player = function() {
    var choice = "X";
    var name = "Gaga";

    return {
        setChoice: function(c) {
            choice = c;
        },

        getChoice: function() {
            return choice;
        }
    }
}();

var ai = function() {
    var choice = "O";

    return {
        setChoice: function(c) {
            switch(c) {
                case "X":
                    choice = "O";
                    break;
                case "O":
                    choice = "X";
                    break;
            }
        },

        getChoice: function() {
            return choice;
        }
    }
}();

var board = function() {
    var grid = [[1, 2, 4], [8, 16, 32], [64, 128, 256]];
    var cellEmp = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    var turnNo = 0;
    var moveCode = 0;

    return {
        emptySquares: 9,

        occupySquare: function() {

        },

        win: function() {
            if(cellEmp[0][0] !== 0 && cellEmp[0][0] === cellEmp[0][1] && cellEmp[0][1] === cellEmp[0][2]){
                return true;
            }
            if(cellEmp[1][0] !== 0 && cellEmp[1][0] === cellEmp[1][1] && cellEmp[1][1] === cellEmp[1][2]){
                return true;
            }
            if(cellEmp[2][0] !== 0 && cellEmp[2][0] === cellEmp[2][1] && cellEmp[2][1] === cellEmp[2][2]){
                return true;
            }
            if(cellEmp[0][0] !== 0 && cellEmp[0][0] === cellEmp[1][0] && cellEmp[1][0] === cellEmp[2][0]){
                return true;
            }
            if(cellEmp[0][1] !== 0 && cellEmp[0][1] === cellEmp[1][1] && cellEmp[1][1] === cellEmp[2][1]){
                return true;
            }
            if(cellEmp[0][2] !== 0 && cellEmp[0][2] === cellEmp[1][2] && cellEmp[1][2] === cellEmp[2][2]){
                return true;
            }
            if(cellEmp[0][0] !== 0 && cellEmp[0][0] === cellEmp[1][1] && cellEmp[1][1] === cellEmp[2][2]){
                return true;
            }
            if(cellEmp[0][2] !== 0 && cellEmp[0][2] === cellEmp[1][1] && cellEmp[1][1] === cellEmp[2][0]){
                return true;
            }
            return false;
        }
    }
}();

$(document).ready(function() {
    dialog = $("#form-dialog").dialog({
        autoOpen: true,
    });

    form = dialog.find("form").on("submit", function(event) {
        event.preventDefault();
        var playerChoice = $("input:radio[name=choice]:checked").val();
        player.setChoice(playerChoice);
        ai.setChoice(playerChoice);
        //console.log(player.getChoice());
        dialog.dialog("close");
    });

    $(".cell").click(function() {
        var id = this.attr('id');
        switch(id) {}

    });

    //Game Loop

});