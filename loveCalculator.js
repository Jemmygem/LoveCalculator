let displayMessage = function (message) {
    document.getElementById("love").textContent = message
}
    const randomNumber = Math.trunc(Math.random() * 100)



    function myLove() {
        const name = document.getElementById("name1").value
        const spouseName = document.getElementById("name2").value
        //document.getElementById("result").innerHTML = randomNumber + "%"
        if (name && spouseName) {
            document.getElementById("result").innerHTML = `${randomNumber} %`
        }

        if (!name) {
            alert("please enter your name")
        }
        else if (!spouseName) {
            alert("please enter your name")
        }

        else if (randomNumber >= 0 && randomNumber <= 25) {
            displayMessage("POOR LOVE, please invest in your love")
        }
        else if (randomNumber >= 25 && randomNumber <= 50) {
            displayMessage("Nurture Your Love To The Best Of Its Kind")
        }
        else if (randomNumber >= 51 && randomNumber <= 75) {
            displayMessage("Wow, Love In Tokyo, Get Ready To Meet The Family For Wedding Plan")
        }
        else if (randomNumber >= 76 && randomNumber <= 100) {
            displayMessage("Start A Family And Begin The Marital Journey With An Amazing Offspring")
        }
    }


    function reset() {
        const name = document.getElementById("name1").value = " ";
        const spouseName = document.getElementById("name2").value = " ";
        document.getElementById("result").innerHTML = " ";
        displayMessage();
    }