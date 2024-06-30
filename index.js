var numberOfTexts = document.querySelectorAll(".text").length
var iList = 0
$("#next-btn").click(toggleText)
$("#all-btn").click(showAll)
$("#reload-btn").click(pageReload)
pageReload()

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
    $("#next-btn").hide()
    $("#all-btn").hide()
}

function pageReload() {
    $(".text").hide(0)
    iList = 0
    $(".list0").slideDown(1000)
    $("#reload-btn").hide()
    $("#next-btn").show()
    $("#all-btn").show()
}