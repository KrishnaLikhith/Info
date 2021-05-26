function search() {

    var address = document.getElementById("1").value;
    if (address != "") {
        setTimeout(function() {
            window.open("https://www.google.com/search?tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2!3sIAE,lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk02jtfA2Nlwx3LdFE6nVihjURva1rw:1621832450796&q=fire%20stations%20near%20" + address);
            document.getElementById("1").value = "";
        }, 5000);
        swal.fire('You are Searching Fire Stations near ' + address);
    } else {
        swal.fire('Please Enter an Address');
    }


}






function back() {
    window.location = "index.html";
}