document.querySelector('button').addEventListener('click',(e)=>{
    e.preventDefault();
    const textarea=document.getElementById('textArea');
    const value=textarea.value
    const str=value;
    const result=str.split(" ").map(word=>{
    const len=word.length;
    if(len>1){
        word=word[len-1]+word.substring(1,len-1)+word[0];
    }
    return word;
    }).join(" ");
    const p=document.createElement('p')
    p.textContent=result;
    document.body.appendChild(p);
})