var json = {
    "name": "john",
    "age" : "22",
    "marks" : ["70","80","58","78","90"]

}
for(var i =0;i<json.marks.length;i++){
    console.log(json.marks[i]);
}
for(let i in json.marks){
    console.log(json.marks[i]);
}
for(let marks of json.marks){
    console.log("mark :"  + json.marks);
}