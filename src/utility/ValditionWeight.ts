interface Item{
    _id:string,
    Name:string,
    Weight:number
}

async function ValditionWeigths(arr:Item[],loadweight:any){
  try{console.log(arr)
    let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum + arr[i].Weight 
  }console.log(sum,loadweight)
  if(sum<=loadweight){return}
  else {throw `the total sumition of items grater then mover`}
  
  }
  catch(e){throw e}
  

}

export {ValditionWeigths}