const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleString('en-US', options);
}
function timeAgo(time) {
    const now = new Date();
    const postDate=new Date(time);
    const diff =now.getTime() - postDate.getTime() ;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    if (days < 30) {
        return `${days} days ago`;
    }
    if (months < 12) {
        return `${months} months ago`;
    }

}
const getBase64=(file)=>{
    return new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result);
        reader.onerror=(error)=>reject(error);
    });
};
const formatInterviewTime=(dateStr)=>{
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {year:'numeric', month:'long',day:'numeric',hour:'numeric', minute:'numeric' ,hour12:true })
}

function openResume(base64String) {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" }); 
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, "_blank");
}

export { formatDate, timeAgo, getBase64,formatInterviewTime,openResume };