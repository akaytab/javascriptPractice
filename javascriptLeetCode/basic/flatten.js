/**
 * prg 1 : to find the flatten of array 
 * EX: Input--> [1,2,[3,4[[5],6],[7,8],],]      output--> [1,2,3,4,5,6,7,8]
 * prg 2: to have the flatten of object
 * {
  name: 'Chiranjit',
  address: {
    personal: {
      city: 'Kolkata',
      state: 'West Bengal'
    },
    office: {
      city: 'Bengaluru',
      state: 'Karnataka',
      area: {
        landmark: 'Waterside',
        post: 433101
      }
    }
  }
};
output--->  {
  name: 'Chiranjit',
  address_personal_city: 'Kolkata',
  address_personal_state: 'West Bengal',
  address_office_city: 'Bengaluru',
  address_office_state: 'Karnataka',
  address_office_area_landmark: 'Waterside',
  address_office_area_post: 433101
}
 */


//prg 1
//type 1 using recursion 
const flatten_Array =(arr)=>{
    let newArr=[];
   arr.forEach(element => {
    if( Array.isArray(element)){
        newArr=newArr.concat(flatten_Array(element))
    }else{
        newArr.push(num);
    }
   }
);
}

// type 2 using .flat()

function flatten_Array2(arr){
    arr.flat(Infinity);
    return arr;
}

// prg 2

const flattenObject =(obj,parent)=>{
    let newObj={};

    for(let key of obj){
        if(typeof(key)==='object'){
            flattenObject(obj[key], parent+'.'+key)
        }else{
            newObj[obj[key]+'.'+key]=obj[key]
        }
    }
    return newObj
}