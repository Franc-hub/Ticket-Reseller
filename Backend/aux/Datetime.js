const CheckDatetime = (date) => {
    let dateNow = Date.now();
    const date1 = new Date(date);
    if (dateNow < date1) {
        const diffInMs = Math.abs(dateNow - date1);
        const diffDays = diffInMs / (1000 * 60 * 60 * 24);
        const diffHrs = (diffInMs / (1000 * 60 * 60)) % 24;
        const diffMn = (diffInMs / (1000 * 60)) % 60;
        const diffS = (diffInMs / (1000)) % 60;
        return `${Math.floor(diffDays)} ${Math.floor(diffHrs)} ${Math.floor(diffMn)} ${Math.floor(diffS)}`
    } else {
        return "Evento ya comenzado o acabado"
    }
};