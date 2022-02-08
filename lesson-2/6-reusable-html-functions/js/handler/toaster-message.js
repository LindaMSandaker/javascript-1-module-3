function createToaster(type = "", message = "") {
    return `<div class="toaster ${type}"> 
            <span style="font-size: 20px; text-transform: capitalize">${type}</span> 
            <span>${message}</span> 
            </div>`;
}

