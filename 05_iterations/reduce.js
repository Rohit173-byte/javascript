const mynum =[1,2,3]

// const mytotal = mynum.reduce( function (acc,curval){
//     console.log(`acc:${acc} and current value is :${curval}`);
//    return  acc+curval
    
// },2)
// console.log(mytotal);

const mytotal= mynum.reduce((acc,curval)=>acc+curval,2)
//console.log(mytotal);


const shooping_card = [
    {
        name:"js_course",
        price:999,
    },

    {
        name:"c++_course",
        price:1200,
    },

    {
        name:"python_course",
        price:1500,
    },
]

const total_price= shooping_card.reduce((acc,item)=>acc+item.price,0)
console.log(total_price);
