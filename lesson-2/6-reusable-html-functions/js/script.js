const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageWarningContainer = document.querySelector(".message-warning");
const messageErrorContainer = document.querySelector(".message-error");

messageSuccessContainer.innerHTML = createToaster("success", "Files are uploaded");
messageInfoContainer.innerHTML = createToaster("info", "Files are uploading");
messageWarningContainer.innerHTML = createToaster("warning", "Files are corrupted");
messageErrorContainer.innerHTML = createToaster("error", "Sorry, files are not uploaded");