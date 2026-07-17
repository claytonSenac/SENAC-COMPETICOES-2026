export default async function configuration(){
    const res = await fetch('/AppSettings.json');
    return await res.json();
}