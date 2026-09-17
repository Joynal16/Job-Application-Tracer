

let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all-cards");
const filteredSection = document.getElementById("filtered-section");
const mainContainer = document.querySelector("main");
const btnDelete = document.getElementsByClassName("delete-btn-1");


function calculateCount() {
  total.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id) {
  allFilterBtn.classList.add("bg-gray-300", "text-black");
  interviewFilterBtn.classList.add("bg-gray-300", "text-black");
  rejectedFilterBtn.classList.add("bg-gray-300", "text-black");

  allFilterBtn.classList.remove("bg-blue-600", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");

  const selectBtn = document.getElementById(id);
  selectBtn.classList.add("bg-blue-600", "text-white");
  selectBtn.classList.remove("bg-gray-300", "text-black");

  currentStatus=id
  console.log(currentStatus);

  if(id == "interview-filter-btn"){
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  }else if(id == "rejected-filter-btn"){
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }else if(id == "all-filter-btn"){
    allCardSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  }
}

mainContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn-1")) {
        const parentNode = event.target.parentNode.parentNode;
        parentNode.remove(total.innerText= allCardSection.children.length-1);
    }
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const mobileFirst = parentNode.querySelector('.mobileFirst').innerText;
        const reactNative = parentNode.querySelector('.reactNative').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const note = parentNode.querySelector('.note').innerText;
        parentNode.querySelector('.status').innerText= 'INTERVIEW';
        const cardInfo = {
            mobileFirst,
            reactNative,
            status: 'INTERVIEW',
            note
        }
    
        let interviewExist = interviewList.find(item => item.mobileFirst == cardInfo.mobileFirst);
        if(!interviewExist){
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item=> item.mobileFirst != cardInfo.mobileFirst)
        if(currentStatus =='rejected-filter-btn'){
            renderRejected()
        }
        calculateCount();
    }else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const mobileFirst = parentNode.querySelector('.mobileFirst').innerText;
        const reactNative = parentNode.querySelector('.reactNative').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const note = parentNode.querySelector('.note').innerText;

        parentNode.querySelector('.status').innerText= 'REJECTED';

        const cardInfo = {
            mobileFirst,
            reactNative,
            status: 'REJECTED',
            note
        }
        let rejectedExist = rejectedList.find(item => item.mobileFirst == cardInfo.mobileFirst);
        if(!rejectedExist){
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item=> item.mobileFirst!=cardInfo.mobileFirst)
        if(currentStatus=='interview-filter-btn'){
            renderInterview()
        }
        calculateCount();
    }
});


function renderInterview(){
    filteredSection.innerHTML= ''

    for(let interview of interviewList){
        let div = document.createElement('div')
        div.className='group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden mt-4'
        div.innerHTML = `
         <div class="p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-slate-100">
               
                    <div class="">
                        <h1 class="mobileFirst text-lg sm:text-xl font-bold tracking-tight text-slate-900">${interview.mobileFirst}</h1>
                        <p class="reactNative text-sm sm:text-base text-slate-500 mt-1">${interview.reactNative}</p>
                    </div>
                     <div>
                    
                </div>
                <p class="delete-btn-1 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 shadow-none rounded-lg p-2 transition cursor-pointer"><i class="fa-solid fa-trash-can"></i> delete</p>
                </div>
               <div class="px-5 sm:px-6 pt-4">
                 <p class="remote text-sm text-slate-500">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p> 
               </div>
                <div class="p-5 sm:p-6">
                    <button  class="status inline-flex items-center bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 mb-3 rounded-full text-xs font-bold tracking-wide shadow-none">${interview.status}</button>
                    <p class="note leading-7 break-words text-slate-600 text-sm sm:text-base">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                 <div class="p-5 sm:p-6">
                    <button class="interview-btn border border-emerald-200 bg-emerald-50 px-3 py-2 rounded-lg text-emerald-700 font-semibold mr-1 hover:bg-emerald-100 hover:border-emerald-300 transition">INTERVIEW</button>
                    <button class="rejected-btn border border-rose-200 bg-rose-50 px-3 py-2 text-rose-600 rounded-lg font-semibold hover:bg-rose-100 hover:border-rose-300 transition">REJECTED</button>
                </div>

        `
        filteredSection.appendChild(div)
    }
}




function renderRejected(){
    filteredSection.innerHTML= ''

    for(let rejected of rejectedList){
        let div = document.createElement('div')
        div.className='group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden mt-4'
        div.innerHTML = `
         <div class="p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-slate-100">
               
                    <div class="">
                        <h1 class="mobileFirst text-lg sm:text-xl font-bold tracking-tight text-slate-900">${rejected.mobileFirst}</h1>
                        <p class="reactNative text-sm sm:text-base text-slate-500 mt-1">${rejected.reactNative}</p>
                    </div>
                     <div>
                    
                </div>
                <p class="delete-btn-1 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 shadow-none rounded-lg p-2 transition cursor-pointer"><i class="fa-solid fa-trash-can"></i> delete</p>
                </div>
               <div class="px-5 sm:px-6 pt-4">
                 <p class="remote text-sm text-slate-500">Remote
 • 
Full-time 
•
 $130,000 - $175,000</p> 
               </div>
                <div class="p-5 sm:p-6">
                    <button  class="status inline-flex items-center bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 mb-3 rounded-full text-xs font-bold tracking-wide shadow-none">${rejected.status}</button>
                    <p class="note leading-7 break-words text-slate-600 text-sm sm:text-base">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                </div>
                 <div class="p-5 sm:p-6">
                    <button class="interview-btn border border-emerald-200 bg-emerald-50 px-3 py-2 rounded-lg text-emerald-700 font-semibold mr-1 hover:bg-emerald-100 hover:border-emerald-300 transition">INTERVIEW</button>
                    <button class="rejected-btn border border-rose-200 bg-rose-50 px-3 py-2 text-rose-600 rounded-lg font-semibold hover:bg-rose-100 hover:border-rose-300 transition">REJECTED</button>
                </div>

        `
        filteredSection.appendChild(div)
    }
}

