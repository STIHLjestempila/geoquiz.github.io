function Click()
{ 
    document.getElementsByClassName("blur")[0].style.display = "none";
    document.getElementsByClassName("quiz")[0].style.display = "block";
}

function Random(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let all = 34;
let lp = all;
let wrong = 0;
let wrongst = 0;
let q = {
    1: "Amazonia", 2: "Syberia", 3: "Sahara", 4: "Grenlandia", 5: "Kamczatka", 6: "Kilimandzaro", 7: "Borneo",
    8: "Ocean Indyjski", 9: "Ocean Atlantycki", 10: "Polwysep Indyjski", 11: "Mount Everest", 12: "Nizina Chinska", 13: "Jakuck",
    14: "Ocean Arktyczny", 15: "Nizina La Platy", 16: "Morze Karaibskie", 17: "Przyladek Branco", 18: "Madagaskar",
    19: "Zatoka Hudsona", 20: "Zatoka Meksykanska", 21: "Alaska", 22: "Archipelag Arktyczny", 23: "Row Marianski",
    24: "Polwysep Arabski", 25: "Alpy", 26: "Polwysep Skandynawski", 27: "Morze Celtyckie", 28: "Morze Czarne", 29: "Ural",
    30: "Dolina Smierci", 31: "Wielkie Rowniny", 32: "Tasmania", 33: "Wyzyna Patagonska", 34: "Ocean Spokojny"
};
let opt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
let sa = [25, 31];
let r = 1;
let rv = 1;
let st = true;

r = Random(0, opt.length - 1);
rv = opt[r];
opt.splice(r, 1);

if (sa.includes(rv) === true)    
{       
    document.getElementsByClassName("question")[0].innerHTML = "Gdzie są " + q[rv] + "?";   
}     
else   
{
    document.getElementsByClassName("question")[0].innerHTML = "Gdzie jest " + q[rv] + "?";
}
        
document.getElementsByClassName("score")[0].innerHTML = "Pytanie " + String(all - opt.length) + "/" + String(all);

function Submit(i)
{
    if (q[i] === q[rv] && document.getElementsByClassName("n" + String(i))[0].style.backgroundColor != "green")
    {
        if (st === true)
        {
            document.getElementsByClassName("n" + String(i))[0].style.backgroundColor = "green";
        }
        else
        {
            document.getElementsByClassName("n" + String(i))[0].style.backgroundColor = "yellow";
        }

        r = Random(0, opt.length - 1);
        rv = opt[r];
        opt.splice(r, 1);
        lp--;

        if (sa.includes(rv) === true)
        {
            document.getElementsByClassName("question")[0].innerHTML = "Gdzie są " + q[rv] + "?";
        }
        else
        {
            document.getElementsByClassName("question")[0].innerHTML = "Gdzie jest " + q[rv] + "?";
        }
        
        st = true;
    }
    else if (document.getElementsByClassName("n" + String(i))[0].style.backgroundColor != "green")
    {
        if (st === true)
        {
            wrongst++;
            st = false;
        }

        document.getElementsByClassName("n" + String(i))[0].innerHTML = "○";
        setTimeout(blink, 500, i);
            
        wrong++;
    }

    document.getElementsByClassName("score")[0].innerHTML = "Pytanie " + String(all - opt.length) + "/" + String(all);
    
    if(lp == 0)
    {
        document.getElementsByClassName("quiz")[0].style.display = "none";
        document.getElementsByClassName("finish")[0].innerHTML = '<p>Twoj wynik to:' + String(all - wrongst) + "/" + String(all) + '<br>Dokladnosc: ' + String(Math.round(all / (all + wrong) * 10000) / 100) + '%' + document.getElementsByClassName("finish")[0].innerHTML;

        if (localStorage.getItem("best") < Math.round(all / (all + wrong) * 10000) / 100)
        {
            document.getElementsByClassName("finish")[0].innerHTML = '<p>Nowy Rekord!</p>' + document.getElementsByClassName("finish")[0].innerHTML;
            localStorage.setItem("best", String(Math.round(all / (all + wrong) * 10000) / 100));
        }
        else
        {
            document.getElementsByClassName("finish")[0].innerHTML = '<p>Aktualny rekord to: ' + localStorage.getItem("best") + '%</p>' + document.getElementsByClassName("finish")[0].innerHTML;
        }

        document.getElementsByClassName("buttoncon")[0].innerHTML += `
        <a class="buttons" href="index.html">ZAGRAJ PONOWNIE</a>
        <a class="buttons" href="../index.html">POWROT<a/>
        `;

        document.getElementsByClassName("finishcon")[0].style.display = "block";
    }
}

function blink(i)
{
    document.getElementsByClassName("n" + String(i))[0].innerHTML = "●";
}

// opt = [1]; lp = 1