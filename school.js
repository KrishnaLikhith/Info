function search() {

    var address = document.getElementById("1").value;
    if (address != "") {
        setTimeout(function() {
            window.open("https://www.google.com/search?q=Schools+near " + address + "&tbm=lcl&sxsrf=ALeKk00V3MrKzV990uV3kKJpCt-GLgV07A%3A1621923731482&ei=k5esYKTZHPWomgfN-rz4CA&oq=Schools+near " + address);
            document.getElementById("1").value = "";
        }, 5000);
        swal.fire('You are Searching Schools near ' + address);



    } else {
        swal.fire('Please Enter an Address');
    }


}



function back() {
    window.location = "index.html";
}