let createTicketBtn =document.querySelector(".ticket-control");
let issuePanel = document.querySelector(".issue-cont");
let issueContentBox = document.querySelector(".issue-text-area");
let allIssuePriority =document.querySelectorAll(".issue-priority");
let allTicketsCont = document.querySelector(".all-tickets-cont");
let issuePanelVisible =true;
let gPriority="normal";

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
        let contentInside = issueContentBox.value;
        createTicket(contentInside);
        restoreDefaultState();
    }
});


function createTicket(ticketDescription){
    let ticketId = generateTicketNumber();
    let newTicket = document.createElement("div");
    newTicket.setAttribute("class", "ticket-cont");
    newTicket.innerHTML=`
        <div class="priority-color ${gPriority}"></div>
        <div class="ticket-id">Ticket ID: ${ticketId}</div>
        <div class="ticket-content" > 
        ${ticketDescription}
        </div>
        <div class="ticket-options">
          <div class="edit-ticket">Edit</div>
          <div class="delete-ticket">Delete</div>
        </div>`

    allTicketsCont.appendChild(newTicket);
    handleEdit(newTicket);
    handleDelete(newTicket);
    
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
        gPriority= priority.classList[0];
    });
});


function generateTicketNumber(){
    let randomTicketNum = Math.floor(Math.random()*900000)+100000;
    return randomTicketNum;
}



function handleDelete(ticket){
    let ticketOptions = ticket.querySelector(".ticket-options");
    let clickedDelete = ticketOptions.children[1];
    clickedDelete.addEventListener("click", function(event){
        ticket.remove();
    });
}

function handleEdit(ticket){
    let ticketOptions = ticket.querySelector(".ticket-options");
    let editClicked = ticketOptions.children[0];
    let ticketContentDiv = ticket.querySelector(".ticket-content");
    // first time allow edit

    let editAllowed = false;
    editClicked.addEventListener("click", function(event){
        editAllowed = !editAllowed;
        if(editAllowed){
            editClicked.innerText='Save';
            ticketContentDiv.setAttribute("contenteditable", "true");
        }else{
            editClicked.innerText='Edit';
            ticketContentDiv.setAttribute("contenteditable", "false");
        }

    });
    

}


function restoreDefaultState(){
    issueContentBox.value="";
    issuePanel.style.display="none";
     issuePanelVisible = !issuePanelVisible;

     allIssuePriority.forEach(function(elem){
        if(elem.classList.contains("border")){
            elem.classList.remove("border");
        }
    });

    allIssuePriority[2].classList.add("border");
    gPriority="normal";
}