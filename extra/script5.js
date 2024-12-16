const str = "Hello world"
console.log(str.slice(0,6))

// Arrow function Syntax
// const function_name = (param1,param2,...param n) => {function body}
// const function_name = () => ({key:'value'})
// const function_name = async (param1,param2,...param n) => {function body} 


const extractAuthors = (books=[{title,author}]) => {


    books.forEach(book => {
        if(!book.hasOwnProperty('author'))
            throw new Error("Invalid book object - 'author' property missing");
        });
    return books.map(book=> book.author);
  };
  
  
  const libraryBooks = [
    { title: 'Brave New World', author: 'Aldous Huxley' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
  ];
  
  
  console.log(extractAuthors(libraryBooks)); // Expected output: ['Aldous Huxley', 'J.D. Salinger']


  //Arrays in objects Syntax
  //const arr=[{key1:value1},{Key2:value2}.......]


  //small program 
  const students =[{id:1,name:'bob',grade:'A'},{id:2,name:'Alex',grade:'A'}];

  const addStudent = (id,name,grade)=>{
    return students.push({id,name,grade});
  }
  addStudent(3,'john','B');
  console.log(students);

  const upgradeStudent =(id,newGrade)=>{
    const studentFound=students.find((student)=>{
        return student.id===id;
    });
    return (studentFound.grade=newGrade) ;
  }

  upgradeStudent(2,'T');
  console.log(students);



  //To-Do list

  const todoList={
    title: 'To-Do List Application',
    tasks:[{}]
  }

  const addTask=(description)=>{
   const addnewID = todoList.tasks.length ;
    const newTask ={
        id: addnewID,
        description:description,
        completed:false
    }
    return todoList.tasks.push(newTask)
  }
  addTask('lunch');
  addTask('Programming');
  addTask('Gamming');


  const updateTask=(id,completed)=>{
    const update =todoList.tasks.find((taskStatus)=>{
        return taskStatus.id===id;
    })
    return (update.completed=completed);
  }
  updateTask(1,true);

  

  console.log(todoList);


// billing Website of E-commerce Website

  const billAmount ={
    apllication_name:'E-commerce bill',
    bill:[],
    totalbill:0
  }

  const addItmes=(name,price,quantity)=>{
    const newId= billAmount.bill.length;
    const addItem={
        id:newId,
        name:name,
        price:price,
        quantity:quantity,
        totalPrice:price*quantity
    }
    return billAmount.bill.push(addItem);
  }

  const madeBill=()=>{
    billAmount.totalbill=0
    billAmount.bill.forEach((item)=>{
        billAmount.totalbill+=item.totalPrice;

    })

    return billAmount.totalbill;


 }

 addItmes('rice',120,8);
 addItmes('Wheat',80,2);
 addItmes('Potato',20,1);
 addItmes('Tomato',55,3);
 console.log(billAmount);

 console.log('Total bill : '+madeBill());
 console.log(billAmount);

 // map() syntax
 // const newArray= originalArray.map(callback(element,index,array))

 //lets add discount if totalprice > 500
const discounted_Price =billAmount.bill.map((product)=>{
    if(product.totalPrice>500){
        return{
            ...product,
            totalPrice:product.totalPrice*0.9
        }
    }
    return product

    });

console.log(billAmount.bill=discounted_Price) ;
// console.log(billAmount);
console.log('Total bill : '+madeBill());


// filter() Syntax
// const newArray = originalArray.filter(calbackFunction){}

const newArray = billAmount.bill.filter((price)=>{
    if (price.totalPrice<500){
        return price;
    }
   
})
console.log('price with less than 500',newArray)


//splice() Syntax
// array.splice(StartIndex,deleteCount,element1,element2)

const playList=[{id:1,songName:'song 1',artist:'A'},
                {id:2,songName:'song 2',artist:'B'},
                {id:3,songName:'song 3',artist:'C'},
                {id:4,songName:'song 4',artist:'D'}];


// console.log(playList);

const indesToRemove=playList.findIndex((song)=>{
    return song.id === 3;
});
// if(indesToRemove!==-1){
//     playList.splice(indesToRemove,1);
// }

const [songtoMove]=playList.splice(indesToRemove,1);
playList.splice(0,0,songtoMove);

const newSong={id:5,songName:'song 5',artist:'A'};
playList.splice(4,0,newSong);

const newPlaylist=()=>{
    array.forEach(element => {
        
    });
}

console.log(playList);



