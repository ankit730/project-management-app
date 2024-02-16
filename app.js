let createTicketBtn =document.querySelector(".ticket-control");
let issuePanel = document.querySelector(".issue-cont");
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

