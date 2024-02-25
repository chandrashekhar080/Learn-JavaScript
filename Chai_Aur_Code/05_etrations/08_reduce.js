/***************** Reduce MEthod for function And Array's ******************* */

const myNum = [ 1,2,3,4,5,6,7,8,9];

const totalNum = myNum.reduce( function (acc, currval)  {
    console.log(`Accumulator : ${acc}, CurrentVAlue : ${currval}`);
    return acc + currval;
},0 )    //An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
        //Calls a defined callback function on each element of an array, and returns an array that contains the results.
 console.log(totalNum);

 const totalNumber = myNum.reduce( (ac,curr) => (ac + curr),0 )

 console.log(totalNumber);


 //use of reduce method in array inside an object

 const buyElectronics = [
    {
        itemName : "Leptop",
        price : 48999,
    },
    {
        itemName : "Mobile",
        price : 15999,
    },
    { 
        itemName : "Iphone",
        price : 140999,
    },
    {
        itemName : "AirDrop's",
        price : 1999,
    }
 ];

 const totalPrice = buyElectronics.reduce( (acc, item) => ( acc + item.price),0 )
  
 console.log(totalPrice);