$(document).ready(function () {
    console.log("Start");
    initGame();

    var myChar = {
        name: "",
        card: null,
        health: 0,
        baseAttack: 0,
        attackInc: 0,
        currAttack: 0,
        counterAttack: 0
    }
    var defChar = {
        name: "",
        card: null,
        health: 0,
        baseAttack: 0,
        attackInc: 0,
        currAttack: 0,
        counterAttack: 0
    }
    var luke = {
        name: "luke",
        health: 120,
        baseAttack: 6,
        attackInc: 6,
        counterAttack: 6
    }
    var darth = {
        name: "darth",
        health: 180,
        baseAttack: 9,
        attackInc: 4,
        counterAttack: 9
    }
    var leia = {
        name: "leia",
        health: 200,
        baseAttack: 10,
        attackInc: 4,
        counterAttack: 10
    }
    var jabba = {
        name: "jabba",
        health: 80,
        baseAttack: 4,
        attackInc: 6,
        counterAttack: 4
    }


    initGame();

    function initGame() {
        haveClickedOne = false;
        haveClickedThree = false;
        $("#luke_1").show();
        $("#darth_1").show();
        $("#leia_1").show();
        $("#jabba_1").show();
        $("#luke_2").hide();
        $("#darth_2").hide();
        $("#leia_2").hide();
        $("#jabba_2").hide();
        $("#luke_3").hide();
        $("#darth_3").hide();
        $("#leia_3").hide();
        $("#jabba_3").hide();
        $("#luke_4").hide();
        $("#darth_4").hide();
        $("#leia_4").hide();
        $("#jabba_4").hide();
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
        myChar.card = $("#luke_2");
        myChar.name = "luke";
        myChar.baseAttack = luke.baseAttack;
        myChar.currAttack = luke.baseAttack;
        myChar.attackInc = luke.attackInc;
        myChar.health = luke.health;
        hideFirstRow();
        setMe();
        haveClickedOne = true;
    });
    $("#darth_1").click(function () {
        myChar.card = $("#darth_2");
        myChar.name = "darth";
        myChar.baseAttack = darth.baseAttack;
        myChar.currAttack = darth.baseAttack;
        myChar.attackInc = darth.attackInc;
        myChar.health = darth.health;
        hideFirstRow();
        setMe();
        haveClickedOne = true;
    });
    $("#leia_1").click(function () {
        myChar.card = $("#leia_2");
        myChar.name = "leia";
        myChar.baseAttack = leia.baseAttack;
        myChar.currAttack = leia.baseAttack;
        myChar.attackInc = leia.attackInc;
        myChar.health = leia.health;
        hideFirstRow();
        setMe();
        haveClickedOne = true;

    });
    $("#jabba_1").click(function () {
        myChar.card = $("#jabba_2");
        myChar.name = "jabba";
        myChar.baseAttack = jabba.baseAttack;
        myChar.currAttack = jabba.baseAttack;
        myChar.attackInc = jabba.attackInc;
        myChar.health = jabba.health;
        hideFirstRow();
        setMe();
        haveClickedOne = true;
    });

    // Set me in 2nd row and remove 
    // you from possible defenders in 3rd row
    function setMe() {
        if (myChar.card != null) {
            hideSecondRow();
            if (myChar.name === "luke") {
                $("#luke_2").show();
                $("#darth_3").show();
                $("#leia_3").show();
                $("#jabba_3").show();
        
            } else if (myChar.name === "darth") {
                $("#darth_2").show();
                $("#luke_3").show();
                $("#leia_3").show();
                $("#jabba_3").show();
            } else if (myChar.name === "leia") {
                $("#leia_2").show();
                $("#luke_3").show();
                $("#darth_3").show();
                $("#jabba_3").show();
            } else if (myChar.name === "jabba") {
                $("#jabba_2").show();
                $("#luke_3").show();
                $("#darth_3").show();
                $("#leia_3").show();
            }
            removeMe();
        }
    }

    function removeMe() {
        if (myChar.card != null) {
            if (myChar.name === "luke") {
                $("#luke_3").hide();
            }
            if (myChar.name === "darth") {
                $("#darth_3").hide();
            }
            if (myChar.name === "leia") {
                $("#leia_3").hide();
            }
            if (myChar.name === "jabba") {
                $("#jabba_3").hide();
            }
        }
    }


    // Handle "defender" set
    // When one is selected - hide the rest
    $("#luke_3").click(function () {
        if (!haveClickedOne) {
            return;
        }
        defChar.card = $("#luke_3");
        defChar.name = "luke";
        defChar.counterAttack = luke.counterAttack;
        defChar.health = luke.health;
        $("#luke_3").hide();
        $("#luke_4").show();
        setDef();
    });
    $("#darth_3").click(function () {
        defChar.card = $("#darth_3");
        defChar.name = "darth";
        defChar.counterAttack = darth.counterAttack;
        defChar.health = darth.health;
        $("#darth_3").hide();
        $("#darth_4").show();
        setDef();
    });
    $("#leia_3").click(function () {
        defChar.card = $("#leia_3");
        defChar.name = "leia";
        defChar.counterAttack = leia.counterAttack;
        defChar.health = leia.health;
        $("#leia_3").hide();
        $("#leia_4").show();
        setDef();
    });
    $("#jabba_3").click(function () {
        defChar.card = $("#jabba_3");
        defChar.name = "jabba";
        defChar.counterAttack = jabba.counterAttack;
        defChar.health = jabba.health;
        $("#jabba_3").hide();
        $("#jabba_4").show();
        setDef();
    });

    function setDef() {
        if (defChar.card != null) {
            if (defChar.name === "luke") {
                $("#darth_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defChar.name === "darth") {
                $("#luke_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defChar.name === "leia") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#jabba_4").hide();
            }
            if (defChar.name === "jabba") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#leia_4").hide();
            }
        }
    }

    // In game attack mode
    $("#attack").click(function () {

        $("#yourAttack").text(myChar.name + " attacked " + defChar.name + " for " + myChar.currAttack + " damage");
        $("#defAttack").text(defChar.name + " attacked you back for " + defChar.counterAttack + " damage");

        myChar.health -= defChar.counterAttack;
        defChar.health -= myChar.currAttack;

        if (myChar.health <= 0) {
            $("#yourAttack").text("You have been defeated - Game Ober!");
            $("#defAttack").html("<button>Restart</button>");
        }
        if (defChar.health <= 0) {
            $("#yourAttack").text("You have defeated " + defChar.name + " , you can choose to fight another enemy.");
            $("#defAttack").text("");
        }
        myChar.currAttack += myChar.attackInc;


    });

    $("#restart").click(function () {
        initGame();
    });

});