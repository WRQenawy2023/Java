function random() {
    var x = Math.random(),
        myEndPattern = 10;
    console.log();
    switch (Math.floor((Math.random() * myEndPattern) + 1)) {

        case 1: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“be yourself; everyone else is already taken.” </h2>
    <h5 class="bg-white">Oscar Wilde</h5>
`
            break;
        case 2: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
</h2>
    <h5 class="bg-white">Marilyn Monroe</h5>
`
            break;
        case 3: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“If you tell the truth, you don't have to remember anything.”</h2>
    <h5 class="bg-white">Mark Twain</h5>
`
            break;
        case 4: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“Without music, life would be a mistake.”</h2>
    <h5 class="bg-white">Friedrich Nietzsche</h5>
`
            break;
        case 5: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“Egmad 34an Lsaaaaaaa XDD.”</h2>
    <h5 class="bg-white">Waleed Qenawy</h5>
`
            break;
        case 6: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“It is better to be hated for what you are than to be loved for what you are not.”</h2>
    <h5 class="bg-white">Andre Gide </h5>
`
            break;
        case 7: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.”</h2>
    <h5 class="bg-white">H. Jackson Brown </h5>
`
            break;
        case 8: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”</h2>
    <h5 class="speaker"> Brown Jr.</h5>
`
            break;
        case 9: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“I am so clever that sometimes I don't understand a single word of what I am saying.”</h2>
    <h5 class="speaker">  Oscar Wilde </h5>
`
            break;
        case 10: document.getElementById("myQuote").innerHTML =
            `
<h2 class="bg-white">“Insanity is doing the same thing, over and over again, but expecting different results.”</h2>
    <h5 class="speaker"> Narcotics Anonymous.</h5>
`
            break;
    }
}