// misol-1
// let num = [55, 3, 2, 11, 3, 4, 6, 7, 12]

// let sortNum = num.sort((a,b) => {
//     return a - b
// })
// console.log(sortNum)



// misol-2
// let arr = [1, 6, 9, 5, 8, 10, 15]
// let allNum = 0
// let array = arr.slice(2, 6, )
// for(let i = 0; i < array.length; i++){
//     if(array[i] > 0){
//         allNum += array[i]
//     }
// }
// console.log(allNum)



// misol-3
// let nums = [1, 5, 7, 11, 5, 4, 6, 4, 8, 9, 5, 8, 3, 1, 0, 2]
// let newNum = []

// function funcNewNum(){
//     for(let i = 0; i < nums.length; i++){
//         if (!newNum.includes(nums[i])){
//             newNum.push(nums[i])
//         }
//     }
// }
// funcNewNum()
// console.log(newNum)



// misol-4
// let num = [1, 5, 91, 2, 24, 5, 6]
// let max = 0
// num.forEach(value => {
//     if (max < value){
//         max = value
//     }
// })
// console.log(max)



// misol-6
// let num = [1, 5, 91, 2, 24, 5, 6];
// console.log(num.reverse())




// misol-7
// let nums = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1]
// let all = 0
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 != 0){
//         all += 1
//         console.log(nums[i])
//     }
// }
// console.log(all)




// misol-8
// let num = [2, 3, 4, 5, 7]
// for(let i = 0; i < num.length; i++){
//     if (i % 2 != 0){
//         console.log(num[i])
//     }
// }




// misol-9
// let num = [2, 3, 4, 5, 7]
// let num1 = 0
// for(let i = 0; i < num.length; i++){
//     if (i % 2 != 0){
//         if(num1 < num[i]){
//             num1 = num[i]
//         }
//     }
// }
// console.log(num1)