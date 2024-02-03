import { buyBook } from "./BookTypes"
//Action
// const purchase_book = () => {
//    return{
//     type : "buyBook"
//    }
// }
 
//Action get another page
export const purchaseBook = () => {
   return{
    type : buyBook
   }
}
