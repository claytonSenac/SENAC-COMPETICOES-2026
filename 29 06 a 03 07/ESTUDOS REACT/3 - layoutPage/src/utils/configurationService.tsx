export default async function getConfiguration(){
    const res = await fetch('/appSettings.json');
    const data =  await  res.json;
    return data;
}