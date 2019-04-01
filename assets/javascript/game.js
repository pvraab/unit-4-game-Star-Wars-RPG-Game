$(document).ready(function () {
    console.log("Start");

    initGame();
    initCrystals();

    function initGame() {
        var iVal = Math.floor(Math.random() * 100);
        console.log(iVal);
        var myNumber = document.getElementById("currentNumber");
        myNumber.textContent = iVal;
        // var myElement = $("#currentNumber");
    };

    function initCrystals() {
        var crystalOne = document.getElementById("crystalOne");
        var iVal = Math.floor(Math.random()*10);
        $("#crystalOne").val(iVal);
        var crystalTwo = document.getElementById("crystalTwo");
        var iVal = Math.floor(Math.random()*10);
        $("#crystalTwo").val(iVal);
        var crystalThree = document.getElementById("crystalThree");
        var iVal = Math.floor(Math.random()*10);
        $("#crystalThree").val(iVal);
        var crystalFour = document.getElementById("crystalFour");
        var iVal = Math.floor(Math.random()*10);
        $("#crystalFour").val(iVal);
    }

    $("#crystalOne").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalOne").val();
        console.log(iVal);

    });
    $("#crystalTwo").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalTwo").val();
        console.log(iVal);

    });
    $("#crystalThree").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalThree").val();
        console.log(iVal);

    });
    $("#crystalFour").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalFour").val();
        console.log(iVal);

    });

});