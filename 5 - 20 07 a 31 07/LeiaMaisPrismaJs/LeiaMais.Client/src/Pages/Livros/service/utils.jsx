export function formatDate(d){
    const date = new Date(d);
    let formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    return formatedDate;
}