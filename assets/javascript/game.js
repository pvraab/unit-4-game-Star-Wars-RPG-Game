$(document).ready(function () {
    console.log("Start");

    var myChar = null;
    var myName = null;
    defChar = null;
    defName = null;

    initGame();

    function initGame() {
        var iVal = Math.floor(Math.random() * 100);
        console.log(iVal);
    };

    function hideFirstRow() {
        $("#luke_1").hide();
        $("#darth_1").hide();
        $("#leia_1").hide();
        $("#jabba_1").hide();
    }

    function hideSecondRow() {
        $("#luke_2").hide();
        $("#darth_2").hide();
        $("#leia_2").hide();
        $("#jabba_2").hide();
    }

    // Handle "your character" set
    // When one is selected - hide all in the first row and set you in the second
    $("#luke_1").click(function () {
        myChar = $("#luke_2");
        myName = "luke";
        hideFirstRow();
        setMe();
    });
    $("#darth_1").click(function () {
        myChar = $("#darth_2");
        myName = "darth";
        hideFirstRow();
        setMe();
    });
    $("#leia_1").click(function () {
        myChar = $("#leia_2");
        myName = "leia";
        hideFirstRow();
        setMe();
    });
    $("#jabba_1").click(function () {
        myChar = $("#jabba_2");
        myName = "jabba";
        hideFirstRow();
        setMe();
    });

    // Set me in 2nd row and remove 
    // you from possible defenders in 3rd row
    function setMe() {
        if (myChar != null) {
            hideSecondRow();
            if (myName === "luke") {
                $("#luke_2").show();
            }
            else if (myName === "darth") {
                $("#darth_2").show();
            }
            else if (myName === "leia") {
                $("#leia_2").show();
            }
            else if (myName === "jabba") {
                $("#jabba_2").show();
            }
            removeMe();
        }
    }

    function removeMe() {
        if (myChar != null) {
            if (myName === "luke") {
                $("#luke_3").hide();
            }
            if (myName === "darth") {
                $("#darth_3").hide();
            }
            if (myName === "leia") {
                $("#leia_3").hide();
            }
            if (myName === "jabba") {
                $("#jabba_3").hide();
            }
        }
    }


    // Handle "defender" set
    // When one is selected - hide the rest
    $("#luke_3").click(function () {
        defChar = $("#luke_3");
        defName = "luke";
        $("#luke_3").hide();
        setDef();
    });
    $("#darth_3").click(function () {
        defChar = $("#darth_3");
        defName = "darth";
        $("#darth_3").hide();
        setDef();
    });
    $("#leia_3").click(function () {
        defChar = $("#leia_3");
        defName = "leia";
        $("#leia_3").hide();
        setDef();
    });
    $("#jabba_3").click(function () {
        defChar = $("#jabba_3");
        defName = "jabba";
        $("#jabba_3").hide();
        setDef();
    });

    function setDef() {
        if (defChar != null) {
            if (defName === "luke") {
                $("#darth_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defName === "darth") {
                $("#luke_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defName === "leia") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#jabba_4").hide();
            }
            if (defName === "jabba") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#leia_4").hide();
            }
        }
    }


});