
function testJS() {
    var b = document.getElementById('name').value,
        url = 'exam.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}