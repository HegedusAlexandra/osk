import pic1 from "../assets/pictures/c (1).jpg"
import pic2 from "../assets/pictures/c (2).jpg"
import pic3 from "../assets/pictures/c (18).jpg"
import pic4 from "../assets/pictures/c (4).jpg"
import pic5 from "../assets/pictures/c (5).jpg"
import pic6 from "../assets/pictures/c (6).jpg"
import pic7 from "../assets/pictures/c (7).jpg"
import pic8 from "../assets/pictures/c (8).jpg"
import pic9 from "../assets/pictures/c (9).jpg"
import pic10 from "../assets/pictures/c (10).jpg"
import pic11 from "../assets/pictures/c (11).jpg"
import pic12 from "../assets/pictures/c (12).jpg"
import pic13 from "../assets/pictures/c (17).jpg"
import pic14 from "../assets/pictures/c (14).jpg"

export const initialState= {
    products: [
      { id: 1, name: "Midnight Lace Corset", quantity: 0 , store: 10, price: 10,url:pic1,type:'FEMALE'},
      { id: 2, name: 'Orange Baron Coat', quantity: 0 , store: 2, price: 20,url:pic2,atr:'object-bottom',type:'MALE'},
      { id: 3, name: 'Silken Whisper Blouse', quantity: 0 ,store: 3, price: 6,url:pic3,type:'FEMALE'},
      { id: 4, name: 'Aurora Chiffon Wrap', quantity: 0 ,store: 1,price: 12,url:pic4,type:'FEMALE'},
      { id: 5, name: 'Ivory Elegance Trousers', quantity: 0 , store: 1, price: 12,url:pic5,type:'MALE'},
      { id: 6, name: 'Opaline Dream Shirt', quantity: 0 , store: 4,price: 14,url:pic6,type:'FEMALE'},
      { id: 7, name: 'Celestial Silk Tops', quantity: 0 , store: 23,price: 3,url:pic7,type:'FEMALE'},
      { id: 8, name: "Lhama Coat", quantity: 0 ,store: 1,price: 10,url:pic8,type:'CHILD'},
      { id: 9, name: 'Velvetine Dusk Gown', quantity: 0 ,store: 3,price: 14,url:pic9,atr:'object-bottom',type:'FEMALE'},
      { id: 10, name: 'Golden Empress Midi Dress', quantity: 0 ,store: 2,price: 20,url:pic10,type:'FEMALE'},
      { id: 11, name: 'Platinum Poise Peacoat', quantity: 0 ,store: 1,price: 25,url:pic11,type:'FEMALE'},
      { id: 12, name: 'Sapphire Serenade Suit ', quantity: 0 ,store: 1,price: 12,url:pic12,type:'FEMALE'},
      { id: 13, name: 'Echo Ridge Tee', quantity: 0 ,store: 0,price: 14,url:pic13,type:'MALE'},
      { id: 14, name: 'Canyon Trek Cargo Shorts', quantity: 0 ,store: 1,price: 15,url:pic14,atr:'object-top',type:'MALE'},
    ],
  };
