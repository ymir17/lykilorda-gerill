window.onload = () => {
    document.getElementById("str").value = '';
}

function generatePW() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("str").value = this.responseText;
        }
    }
}
