// JavaScript for Bootcamp Homework #4
// Paul Raab
// Raab Enterprises LLC
// 4/12/2019
// ## Harder Assignment - Building a Star Wars RPG game
// ToDo - Refactor to remove all the duplicate code - I think we can do this better
// Also look at using dynamic positioning instead of hide/show.
$(document).ready(function () {
    console.log("Start");

    var haveClickedOne = false;
    var haveClickedThree = false;
    var canPickNewDefender = false;
    var canAttack = false;
    var deadDef = 0;

    // Initialize attacker/defender objects
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

        // Initialize character objects
    var luke = {
        name: "Luke Skywalker",
        health: 120,
        baseAttack: 6,
        attackInc: 6,
        counterAttack: 6
    }
    var darth = {
        name: "Darth Vader",
        health: 180,
        baseAttack: 9,
        attackInc: 4,
        counterAttack: 9
    }
    var leia = {
        name: "Princess Leia",
        health: 200,
        baseAttack: 10,
        attackInc: 4,
        counterAttack: 10
    }
    var jabba = {
        name: "Jabba The Hut",
        health: 50,
        baseAttack: 4,
        attackInc: 6,
        counterAttack: 4
    }

    initGame();

    // Initialize game
    function initGame() {
        haveClickedOne = false;
        haveClickedThree = false;
        canPickNewDefender = false;
        canAttack = false;

        deadDef = 0;

        $("#characterPick").text("Pick Your Character");

        $("#yourAttack").text("");
        $("#defAttack").text("");

        $("#luke_2a").text("120");
        $("#darth_2a").text("180");
        $("#leia_2a").text("200");
        $("#jabba_2a").text("50");

        $("#luke_4a").text("120");
        $("#darth_4a").text("180");
        $("#leia_4a").text("200");
        $("#jabba_4a").text("50");

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
        $("#restart").hide();
    };

    // Hide the first row
    function hideFirstRow() {
        $("#luke_1").hide();
        $("#darth_1").hide();
        $("#leia_1").hide();
        $("#jabba_1").hide();
    }

    // Hide the second row
    function hideSecondRow() {
        $("#luke_2").hide();
        $("#darth_2").hide();
        $("#leia_2").hide();
        $("#jabba_2").hide();
    }

    // Handle "your character" set - only characters visible
    // When one is selected - hide all in the first row and set you in the second
    $("#luke_1").click(function () {
        myChar.card = $("#luke_2");
        myChar.name = "Luke Skywalker";
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
        myChar.name = "Darth Vader";
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
        myChar.name = "Princess Leia";
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
        myChar.name = "Jabba The Hut";
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
            if (myChar.name === "Luke Skywalker") {
                $("#luke_2").show();
                $("#darth_3").show();
                $("#leia_3").show();
                $("#jabba_3").show();
            } else if (myChar.name === "Darth Vader") {
                $("#darth_2").show();
                $("#luke_3").show();
                $("#leia_3").show();
                $("#jabba_3").show();
            } else if (myChar.name === "Princess Leia") {
                $("#leia_2").show();
                $("#luke_3").show();
                $("#darth_3").show();
                $("#jabba_3").show();
            } else if (myChar.name === "Jabba The Hut") {
                $("#jabba_2").show();
                $("#luke_3").show();
                $("#darth_3").show();
                $("#leia_3").show();
            }
            removeMeFromThird();
            canPickNewDefender = true;
            $("#characterPick").text("Your Character");

        }
    }

    // Remove you from possible defenders
    function removeMeFromThird() {
        if (myChar.card != null) {

            // Show everyone
            $("#luke_3").show();
            $("#darth_3").show();
            $("#leia_3").show();
            $("#jabba_3").show();
            if (myChar.name === "Luke Skywalker") {
                $("#luke_3").hide();
            }
            if (myChar.name === "Darth Vader") {
                $("#darth_3").hide();
            }
            if (myChar.name === "Princess Leia") {
                $("#leia_3").hide();
            }
            if (myChar.name === "Jabba The Hut") {
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
        if (!canPickNewDefender) {
            return;
        }
        canPickNewDefender = false;
        canAttack = true;
        defChar.card = $("#luke_3");
        defChar.name = "Luke Skywalker";
        defChar.counterAttack = luke.counterAttack;
        defChar.health = luke.health;
        $("#luke_3").hide();
        $("#luke_4").show();
        setDef();
    });
    $("#darth_3").click(function () {
        if (!haveClickedOne) {
            return;
        }
        if (!canPickNewDefender) {
            return;
        }
        canPickNewDefender = false;
        canAttack = true;
        defChar.card = $("#darth_3");
        defChar.name = "Darth Vader";
        defChar.counterAttack = darth.counterAttack;
        defChar.health = darth.health;
        $("#darth_3").hide();
        $("#darth_4").show();
        setDef();
    });
    $("#leia_3").click(function () {
        if (!haveClickedOne) {
            return;
        }
        if (!canPickNewDefender) {
            return;
        }
        canPickNewDefender = false;
        canAttack = true;
        defChar.card = $("#leia_3");
        defChar.name = "Princess Leia";
        defChar.counterAttack = leia.counterAttack;
        defChar.health = leia.health;
        $("#leia_3").hide();
        $("#leia_4").show();
        setDef();
    });
    $("#jabba_3").click(function () {
        if (!haveClickedOne) {
            return;
        }
        if (!canPickNewDefender) {
            return;
        }
        canPickNewDefender = false;
        canAttack = true;
        defChar.card = $("#jabba_3");
        defChar.name = "Jabba The Hut";
        defChar.counterAttack = jabba.counterAttack;
        defChar.health = jabba.health;
        $("#jabba_3").hide();
        $("#jabba_4").show();
        setDef();
    });

    // Setup defender
    function setDef() {
        if (defChar.card != null) {
            if (defChar.name === "Luke Skywalker") {
                $("#luke_4").show();
                $("#darth_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defChar.name === "Darth Vader") {
                $("#luke_4").hide();
                $("#darth_4").show();
                $("#leia_4").hide();
                $("#jabba_4").hide();
            }
            if (defChar.name === "Princess Leia") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#leia_4").show();
                $("#jabba_4").hide();
            }
            if (defChar.name === "Jabba The Hut") {
                $("#luke_4").hide();
                $("#darth_4").hide();
                $("#leia_4").hide();
                $("#jabba_4").show();
            }
        }
    }

    // In game attack mode
    $("#attack").click(function () {

        if (!canAttack) {
            return;
        }

        $("#yourAttack").text(myChar.name + " attacked " + defChar.name + " for " + myChar.currAttack + " damage");
        $("#defAttack").text(defChar.name + " attacked you back for " + defChar.counterAttack + " damage");

        myChar.health -= defChar.counterAttack;
        if (myChar.name === "Luke Skywalker") {
            $("#luke_2a").text(myChar.health);
        }
        if (myChar.name === "Darth Vader") {
            $("#darth_2a").text(myChar.health);
        }
        if (myChar.name === "Princess Leia") {
            $("#leia_2a").text(myChar.health);
        }
        if (myChar.name === "Jabba The Hut") {
            $("#jabba_2a").text(myChar.health);
        }

        defChar.health -= myChar.currAttack;
        if (defChar.name === "Luke Skywalker") {
            $("#luke_4a").text(defChar.health);
        }
        if (defChar.name === "Darth Vader") {
            $("#darth_4a").text(defChar.health);
        }
        if (defChar.name === "Princess Leia") {
            $("#leia_4a").text(defChar.health);
        }
        if (defChar.name === "Jabba The Hut") {
            $("#jabba_4a").text(defChar.health);
        }

        if (myChar.health <= 0) {
            $("#yourAttack").text("You have been defeated - Game Over!");
            $("#defAttack").text("");
            $("#restart").show();
            canAttack = false;
        }
        if (defChar.health <= 0) {
            canPickNewDefender = true;
            canAttack = false;
            $("#yourAttack").text("You have defeated " + defChar.name);
            deadDef++;
            if (deadDef == 3) {
                $("#defAttack").text("You've beaten them all!!!");
                $("#restart").show();
            } else {
                $("#defAttack").text("You must choose to fight another enemy.");
            }
            if (defChar.name === "Luke Skywalker") {
                $("#luke_4").hide();
            }
            if (defChar.name === "Darth Vader") {
                $("#darth_4").hide();
            }
            if (defChar.name === "Princess Leia") {
                $("#leia_4").hide();
            }
            if (defChar.name === "Jabba The Hut") {
                $("#jabba_4").hide();
            }
        }
        myChar.currAttack += myChar.attackInc;


    });

    $("#restart").click(function () {
        initGame();
    });

});