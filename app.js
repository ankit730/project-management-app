let createTicketBtn =document.querySelector(".ticket-control");
let issuePanel = document.querySelector(".issue-cont");
let issueContentBox = document.querySelector(".issue-text-area");
let allIssuePriority =document.querySelectorAll(".issue-priority");
let issuePanelVisible =true;

// show Ticket issue panel when click button is clicked
createTicketBtn.addEventListener("click",function(event){
    console.log("create clicked");
    issuePanelVisible = !issuePanelVisible;
    if(issuePanelVisible){
    issuePanel.style.display="none";
    }else{
        issuePanel.style.display="flex";
    }
});

// whenever enter is pressed create a new ticket

issuePanel.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        console.log(issueContentBox.value);
        createTicket();
        
        issueContentBox.value="";
        issuePanel.style.display="none";
        issuePanelVisible = !issuePanelVisible;
        
    }
});


function createTicket(ticketDescription){
    let ticketId = generateTicketNumber();

}



// event listeners on all issue-priority while creating ticket
allIssuePriority.forEach(function(priority){
    priority.addEventListener("click", function(event){
        
        allIssuePriority.forEach(function(elem){
            if(elem.classList.contains("border")){
                elem.classList.remove("border");
            }
        });

        priority.classList.add("border");
    });
});


function generateTicketNumber(){
    let randomTicketNum = Math.floor(Math.random()*900000)+100000;
    return randomTicketNum;
}