function CreateObject(arr) {
    let obj={}
    for(i=0;i<arr.length;i=i+2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}

module.exports = CreateObject;
