// let YourName = prompt("Your Name ?");
// let Partnername = prompt("Your Partnername")

// let number = Math.random() * 100;
// number = Math.floor(number) + 1;

// // let lVisit = (" Thanks For Visit My Webpage ")


// alert(YourName + " and " + Partnername + "'s Love Percentage is:" + number + "%" );

// // alert(lVisit)


// function calculateLove() {
//     // ইনপুট ফিল্ড থেকে ইউজারের নাম নেওয়া
//     let YourName = document.getElementById("YourName").value;
//     let Partnername = document.getElementById("Partnername").value;

//     // ১ থেকে ১০০ এর মধ্যে র‍্যান্ডম সংখ্যা তৈরি করা
//     let number = Math.floor(Math.random() * 100) + 1;

//     // রেজাল্ট দেখানো
//     let resultText = YourName + " and " + Partnername + "'s Love Percentage is: " + number + "%";
    
//     // HTML-এ রেজাল্ট দেখানো
//     document.getElementById("result").innerHTML = `<h2>${resultText}</h2>`;
// }

function calculateLove() {
    let yourName = document.getElementById("yourName").value;
    let partnerName = document.getElementById("partnerName").value;

    if (yourName === "" || partnerName === "") {
        alert("Please enter both names!");
        return;
    }

    let lovePercentage = Math.floor(Math.random() * 100) + 1;
    let resultText = `${yourName} and ${partnerName}'s Love Percentage is : ${lovePercentage}%`;

    // লোকাল স্টোরেজে রেজাল্ট সেভ করবো
    localStorage.setItem("loveResult", resultText);

    // result.html পেজে রিডাইরেক্ট করবো
    window.location.href = "result.html";
}


