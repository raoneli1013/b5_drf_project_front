window.addEventListener("load", function () {
    var header = document.querySelector('#logo');
    console.log(header);
    const max = 7;
    const randomInt = Math.floor(Math.random() * (max)) + 1;
    console.log(randomInt)
    header.innerHTML = `<h1 class="afasfsa">
                                <a class="logobox" href="index.html">
                                    <img src="images/logos/logo${randomInt}.png" alt="">
                                </a>
                            </h1>`
});
