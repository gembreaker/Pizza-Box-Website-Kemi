var appID = 'c2aa28e9';
var appKEY = '624b2d61fe626195c6399369a743bcdb';

function upcGet(upc, callback) {
    var getURL = "https://api.nutritionix.com/v1_1/item?upc=" + upc + "&appId=" + appID + "&appKey=" + appKEY;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", getURL, true); // true for asynchronous 
    xmlHttp.send(null);
}

function postResults(response) {
    $("[name='results']").html(response);
}

$(document).on("click", "[name='search']", function () {
    upcGet($("[name='upc']").val(), postResults);
})

function postResults(response) {
    var calories;
    var fat;
    var sodium;
    var sugars;

    var foodItem = JSON.parse(response);

    $("[name='calories']").html(foodItem.nf_calories);
    $("[name='fat']").html(foodItem.nf_total_fat);
    $("[name='sodium']").html(foodItem.nf_sodium);
    $("[name='sugars']").html(foodItem.nf_sugars);
}

$(document).on("keydown", "[name='upc']", function (e) {
    console.log(e);
    if (e.keyCode === 13) {
        upcGet($("[name='upc']").val(), postResults);
    }
});

$(function () {
    $(".dial").knob();
});

$('.dial')
    .val(0)
    .trigger('change');

function postResults(response) {
    var calories;
    var fat;
    var sodium;
    var sugars;

    var foodItem = JSON.parse(response);

    $("[name='calories']").val(foodItem.nf_calories);
    $("[name='calories']").trigger('change');
    $("[name='fat']").val(foodItem.nf_total_fat);
    $("[name='fat']").trigger('change');
    $("[name='sodium']").val(foodItem.nf_sodium);
    $("[name='sodium']").trigger('change');
    $("[name='sugars']").val(foodItem.nf_sugars);
    $("[name='sugars']").trigger('change');

    $("[name='productName']").html(foodItem.item_name);

}
