function getById(id){
    return document.getElementById(id);
}

let hotlineEl = getById("hotline");
let hotlineNumbers = [
    {
        icon: "emergency",
        iconBg: "bg-[#ffe3e2]",
        head: "National Emergency Number",
        subhead: "National Emergency",
        number: "999",
        category: "All",
    },
    {
        icon: "police",
        iconBg: "bg-[#dfefff]",
        head: "Police Helpline Number",
        subhead: "Police",
        number: "999",
        category: "Police",
    },
    {
        icon: "fire-service",
        iconBg: "bg-[#ffe3e2]",
        head: "Fire Service Number",
        subhead: "Fire Service",
        number: "999",
        category: "Fire",
    },
    {
        icon: "ambulance",
        iconBg: "bg-[#ffe3e2]",
        head: "Ambulance Service",
        subhead: "Ambulance",
        number: "1994-999999",
        category: "Health",
    },
    {
        icon: "emergency",
        iconBg: "bg-[#ffe3e2]",
        head: "Women & Child Helpline",
        subhead: "Women & Child Helpline",
        number: "109",
        category: "Help",
    },
     {
        icon: "emergency",
        iconBg: "bg-[#ffe3e2]",
        head: "Anti-Corruption Helpline",
        subhead: "Anti-Corruption",
        number: "106",
        category: "Govt.",
    },
    {
        icon: "emergency",
        iconBg: "bg-[#ffe3e2]",
        head: "Electricity Helpline",
        subhead: "Electricity Outage",
        number: "16216",
        category: "Electricity",
    },
    {
        icon: "brac",
        iconBg: "bg-pink-100",
        head: "Brac Helpline",
        subhead: "Brac",
        number: "16445",
        category: "NGO",
    },
    {
        icon: "Bangladesh-Railway",
        iconBg: "bg-amber-100",
        head: "Bangladesh Railway Helpline ",
        subhead: "Bangladesh Railway",
        number: "163",
        category: "Travel",
    },
];

let heartCount = 0;
let heartCountEl = getById("heart-count");

function increaseHeart(){
    heartCount++;
    heartCountEl.innerText = heartCount;
}

let coinCount = 100;
let coinCountEl = getById("coin-count");

function createHistory(hotlineName, hotlineNumber) {
    let callHistoryEl = getById("call-history");
    callHistoryEl.innerHTML += `
        <div class="bg-neutral-50 p-4 rounded-2xl flex justify-between items-center">
            <div>
                <p class="text-[18px] font-semibold text-[#111]">${hotlineName}</p>
                <p class="font-hind-madurai text-[18px] text-[#5c5c5c]">${hotlineNumber.toString()}</p>
            </div>
            <div>
                <p class="font-hind-madurai text-[18px] text-right text-[#383838]">${new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    `;
}

let clearHistoryBtn = getById("clear-history-btn");

function clearHistory(){
    let callHistoryEl = getById("call-history");
    callHistoryEl.innerHTML = "";
}

clearHistoryBtn.addEventListener('click', clearHistory);

let copyCount = 0;
let copyCountEl = getById("copy-count");

function copyNumber(number){
    copyCount++;
    copyCountEl.innerHTML = copyCount;
    navigator.clipboard.writeText(number);
    alert(`Number copied: ${number}`)
}

function callEmergency(hotlineName, hotlineNumber){
    if(coinCount < 20){
        alert("❌ You don't have sufficient coin! To make call, you need at least 20 coins.");
        return;
    }
    coinCount -= 20;
    coinCountEl.innerText = coinCount;
    alert(`📞 Calling ${hotlineName} ${hotlineNumber}...`);
    createHistory(hotlineName, hotlineNumber);
}

for(let hotline of hotlineNumbers){
    hotlineEl.innerHTML += `
        <div class="card w-full bg-base-100 shadow-sm">
            <div class="p-4">
                <div class="flex justify-between items-center">
                    <img src="assets/${hotline.icon}.png" alt="${hotline.head}" class="${hotline.iconBg} size-14 p-3 rounded-2xl mb-2">
                    <i class="fa-regular fa-heart text-xl cursor-pointer" onclick="increaseHeart();"></i>
                </div>
                <h4 class="text-2xl font-hind-madurai font-bold text-[#111]">${hotline.head}</h4>
                <p class="text-[18px] text-[#5c5c5c] font-roboto">${hotline.subhead}</p>
                <h3 class="text-3xl font-bold font-sans text-[#111]">${hotline.number}</h3>
                <span class="bg-[#f2f2f2] py-3 px-5 rounded-full inline-block my-2 text-[#5c5c5c]">${hotline.category}</span>
                <div class="grid grid-cols-2 gap-2">
                    <button type="button" onclick="copyNumber('${hotline.number}')" class="border border-[#d4d6d5] rounded-lg p-2 cursor-pointer text-[#5c5c5c] duration-300 hover:border-black hover:bg-black hover:text-white"><i class="fa-regular fa-clone"></i> Copy</button>
                    <button type="button" onclick="callEmergency(
                    '${hotline.head}', '${hotline.number}');" class="bg-[#00a63e] rounded-lg p-2 cursor-pointer text-white duration-300 hover:bg-[#d4d6d5] hover:text-white"><i class="fa-solid fa-phone"></i> Call</button>
                </div>
            </div>
        </div>
    `;
}
