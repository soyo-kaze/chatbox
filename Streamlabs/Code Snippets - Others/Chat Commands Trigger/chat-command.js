// Custom fields

/* ! Exclamation mark is not necessary

"trigger": {
        "label": "Textfield Example",
        "type": "textfield",
        "value": "!love"
    },


*/

// Example without any event.

const messageBody = obj.detail.body; //raw message body
let triggerWord = "{trigger}"; //custom field parameter. Easy for user to update.
if(messageBody.includes(triggerWord)){
    //your function here
}

//example with heart popup animation from pastel heart theme.
//loop must delayed each iteration so the animation don't stack and run all at once.

function bomb(){ //heart popup under a function so can be call again later
    var randomNumber = function(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var bottom = randomNumber(5, 20);
    var right = randomNumber(10, 90);
    var size = randomNumber(15, 50);
    var heartsId = randomNumber(100, 50000); //basic id system to delete message. as the number are only used for max 3 seconds, chance of same number are low.
    let defaultImage = "";
    const customImage = {custom-image};
    let heartsAni = "{animation}"; //css animation type - since i made 2 to choose.

    if(customImage == true) {
        defaultImage = "{custom-image-uploaded}";
    } else {
        defaultImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGNsYXNzPSIiIHN0eWxlPSIiLz4KCQo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZmlsbD0iI2U1NmQ0MiIgZD0iTTEwLjAwMDAwMTgzMDIxMjI4OCwxNy41NTA1MTQ5NzQwNTk2MSBsLTEuMzUxMzA3NDcxMTA1NzQ0LC0xLjIzMDE1NTc2Njc5OTcxMTggYy00Ljc5OTQ3MTM2Mjg5MjgxNSwtNC4zNTIxNDE5OTMxNDc0NjUgLTcuOTY4MDU0Mzk4NTg5MDQzLC03LjIyMjUwNTQ0OTAxMzQ1OSAtNy45NjgwNTQzOTg1ODkwNDMsLTEwLjc0NTIyNDIzNTc1ODA4NyBjMCwtMi44NzAzNjM0NTU4NjU5OTQ1IDIuMjU1Mjg1NTcyNDY2MTM4LC01LjEyNTY0OTAyODMzMjEzMiA1LjEyNTY0OTAyODMzMjEzMiwtNS4xMjU2NDkwMjgzMzIxMzIgYzEuNjIxNTY4OTY1MzI2ODkzOSwwIDMuMTc3OTAyMzk3NTY1OTIyNCwwLjc1NDg2ODMxMTQ0NTI3NzMgNC4xOTM3MTI4NDEzNjI2NTQsMS45NDc3NDY2MzA3NjYyMTA0IGMxLjAxNTgxMDQ0Mzc5NjczMTUsLTEuMTkyODc4MzE5MzIwOTMyNSAyLjU3MjE0Mzg3NjAzNTc2MTMsLTEuOTQ3NzQ2NjMwNzY2MjEwNCA0LjE5MzcxMjg0MTM2MjY1NCwtMS45NDc3NDY2MzA3NjYyMTA0IGMyLjg3MDM2MzQ1NTg2NTk5NDUsMCA1LjEyNTY0OTAyODMzMjEzMiwyLjI1NTI4NTU3MjQ2NjEzOCA1LjEyNTY0OTAyODMzMjEzMiw1LjEyNTY0OTAyODMzMjEzMiBjMCwzLjUyMjcxODc4Njc0NDYyOTIgLTMuMTY4NTgzMDM1Njk2MjI3Miw2LjM5MzA4MjI0MjYxMDYyNCAtNy45NjgwNTQzOTg1ODkwNDMsMTAuNzU0NTQzNTk3NjI3NzgyIGwtMS4zNTEzMDc0NzExMDU3NDQsMS4yMjA4MzY0MDQ5MzAwMTY5IHoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==";
    }
    $("#custom_html").append('<span class="hearts' + ` hearts-${heartsId}` + ` ${heartsAni}"` + 'style="position: absolute; bottom:' + bottom + '%; right:' + right + '%;"><img width="' + size + '"' + `src="${defaultImage}` + '"></img></span>');
    setTimeout(function () { $(`.hearts-${heartsId}`).remove(); }, 3000);
}

bomb(); //function called

//heart spam.
const messageBody = obj.detail.body; //message body
let triggerWord = "{trigger}"; //custom field parameter. put text input there so easy for user to update.
if (obj.detail.tags.mod == "1" || obj.detail.owner == "1" ){ //detect if mod/streamer.
    if(messageBody.includes(triggerWord)){
        (function delayBomb(i) { //function to ensure animation/multiple popup don't stack.
            setTimeout(function() {
            bomb(); //the heart popup function
            if (--i) delayBomb(i);
            }, 100) //delay
        })(100);  //no of loop (hearts popup)
    }
}