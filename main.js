let currentEntry = "0";
let previousEntry = "0";
let errorcode = 0;

function updateDisplay(){
    $('.output').html(currentEntry);
    if(previousEntry == 0){
        $('.previous').html("")
    } else {
        $('.previous').html(previousEntry)
    }
    // console.log(currentEntry);
}

$('button').click(function () {
    $('button').blur();
})

$('#ac').click(function () {
    currentEntry = "0";
    previousEntry = "0";
    $('.operator').html("");
    updateDisplay();
})



$("[id='num']").each(function(index) {
    $(this).on('click', function() {

        if(currentEntry == "0"){
            if($(this).html() === "0" || $(this).html() === "00"){
                return;
            } else {
                currentEntry = $(this).html();
                updateDisplay();
            }
        } else {
            if(errorcode === 1){
                errorcode = 0;
                currentEntry = "0";
                previousEntry = "0";
                updateDisplay();
                return;
            }
            currentEntry = $('.output').html() + $(this).html();
            updateDisplay();
        }

    })
})

$('#plus').on('click', function() {
    if(errorcode === 1){
        errorcode = 0;
        currentEntry = "0";
        previousEntry = "0";
        updateDisplay();
        return;
    }
    $('.operator').html("+");
    previousEntry = currentEntry;

    currentEntry = "0";
    updateDisplay();
})

$('#min').on('click', function() {
    if(errorcode === 1){
        errorcode = 0;
        currentEntry = "0";
        previousEntry = "0";
        updateDisplay();
        return;
    }
    $('.operator').html("-");
    previousEntry = currentEntry;

    currentEntry = "0";
    updateDisplay();
})

$('#mul').on('click', function() {
    if(errorcode === 1){
        errorcode = 0;
        currentEntry = "0";
        previousEntry = "0";
        updateDisplay();
        return;
    }
    $('.operator').html("x");
    previousEntry = currentEntry;

    currentEntry = "0";
    updateDisplay();
})

$('#div').on('click', function() {
    if(errorcode === 1){
        errorcode = 0;
        currentEntry = "0";
        previousEntry = "0";
        updateDisplay();
        return;
    }
    $('.operator').html("÷");
    previousEntry = currentEntry;

    currentEntry = "0";
    updateDisplay();
})

$('#eql').on('click', function() {
    switch ($('.operator').html()){
        case "+":
            currentEntry = (parseFloat(currentEntry) + parseFloat(previousEntry));
            updateDisplay();
            break;
        case "-":
            currentEntry = (parseFloat(previousEntry) - parseFloat(currentEntry));
            break;
        case "x":
            currentEntry = (parseFloat(currentEntry) * parseFloat(previousEntry));
            break;
        case "÷":
            if(currentEntry === "0"){
                currentEntry = "Cannot Divide by Zero!";
                errorcode = 1;
                $('.operator').html("");
                previousEntry = 0;
                updateDisplay();
                break;
            }
            currentEntry = (parseFloat(previousEntry) / parseFloat(currentEntry));
            break;
        default:
            break;
    }
    currentEntry = parseFloat((currentEntry).toFixed(15))
    $('.operator').html("");
    previousEntry = 0;
    updateDisplay();
})

$('#negpos').on('click', function () {
    currentEntry = parseFloat(currentEntry) * -1;
    currentEntry = currentEntry.toString();
    updateDisplay();
})

$('#per').on('click', function () {
    currentEntry = parseFloat(currentEntry) * 0.01;
    currentEntry = currentEntry.toString();
    updateDisplay();
})

$('#point').on('click', function () {
    if(currentEntry.includes('.')){
        return;
    } else {
        currentEntry = currentEntry + ".";
        updateDisplay();
    }
})
