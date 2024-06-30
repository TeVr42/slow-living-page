var numberOfTexts = document.querySelectorAll(".text").length
$(".text").hide(0)

$(".list0").slideDown(1000)
var iList = 0

$("#next-btn").click(toggleText)
$("#all-btn").click(showAll)
$("#reload-btn").click(pageReload)
$("#reload-btn").hide()

function toggleText() {
    $(".list" + iList).fadeOut(0)
    iList ++

    if (iList >= numberOfTexts) {
        iList = 0
    }
    $(".list" + iList).fadeIn(1500)
}

function showAll() {
    $(".text").slideDown(1000)
    $("#reload-btn").show()
    $("#next-btn").hide(0)
    $("#all-btn").hide(0)
}

function pageReload() {
    location.reload()
}