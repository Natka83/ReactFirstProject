//import logo from './logo.svg';
import './App.css';
import React from "react";

//название группы,
//информация об участниках группы, название альбомов, обложки альбомов.

const musGroup={
  name:'Moby',
  info:'Ри́чард Ме́лвилл Холл — американский диджей, певец, композитор, мультиинструменталист и исполнитель, работающий в различных жанрах — от электроники до поп-музыки, рока и панка. Является сольным артистом, большую часть студийных записей делает сам, а на концертах музыканта сопровождает его рок-группа.Моби играет на клавишных, гитаре, бас-гитаре и ударной установке. В ранние годы играл в хардкор-панк-группе The Vatican Commandos, но в 1989 году сменил панк на электронную музыку. Первый альбом — в стиле техно — выпустил в 1992 году (Moby).',
  albums:['Moby','Ambient','Everything is wrong','Animal Rights','Play','18','Hotel','Last Night','Destroyed','Innocents'],
  cover:['/images/moby1.jpg','/images/moby2.jpg','/images/moby3.jpg','/images/moby4.jpg']  
}


//*******************       time      ******************************************* */
// function AppTime() {
//   /*
//   Получаем текущее время Мы будем его использовать, как значение внутри h2 Для вставки значения,
//   которое должно быть динамически заполнено используются {}
//   */
//   let currentTime = new Date().toLocaleTimeString();
//   return (
//   <div className="App">
//   <h1>Current time is</h1>
//   <h2>{currentTime}</h2>
//   </div>
//   );
//   }


//**********************          myFavouriteMusGroup         ********************************************/
// function AppMusGroup() {
//   return (
//     <React.Fragment>
//       <div className="App">
//       <h1>{musGroup.name}</h1>
//       <p>{musGroup.info}</p>
//       <h2>Albums:</h2>
//       <p> {musGroup.albums[0]},  
//           {musGroup.albums[1]},  
//           {musGroup.albums[2]}, 
//           {musGroup.albums[5]}, 
//           {musGroup.albums[6]},
//           {musGroup.albums[7]}
//       </p> 
//       <h2>Albums cover:</h2>
//       <img className="photo" src={musGroup.cover[0]} alt="moby1"/>
//       <img className="photo" src={musGroup.cover[1]} alt="moby2"/>
//       <img className="photo" src={musGroup.cover[2]} alt="moby3"/>
//       <img className="photo" src={musGroup.cover[3]} alt="moby4"/>
//       </div>
//       <hr></hr>
//     </React.Fragment>
//   );
// }



//******************     myBook    ****************************************************** */
// function AppBook() {
//   const Book = {
//     name:"Digital Fortress",
//     author:"Dan Braun",
//     kolpgs:"548",
//     photo:'/images/Digital.jpg',
//     review:"Digital Fortress is a techno-thriller novel written by American author Dan Brown and published in 1998 by St. Martin's Press. The book explores the theme of government surveillance of electronically stored information on the private lives of citizens, and the possible civil liberties and ethical implications of using such technology."
//   };
//   return (
//   <div className="App">
//   <h1>{Book.name}</h1>
//   <h2>{Book.author}</h2>
//   <img className="photo" src={Book.photo} alt="Digital"/>
//   <p>Pages: {Book.kolpgs}</p>
//   <p>Review: {Book.review}</p>
//   </div>
//   );
//   }


  //***************************    myDish    ************************************************* */
  function AppDish() {
    
    const Dish = {
      name:"Лосось в медово-горчичном соусе ",
      ingridients: ['3 ст. л. тростникового сахара',
                    '1 ст. л. меда ',
                    '2 ст. л. (30 гр.) сливочного масла ',
                    '1/4 ст. горчицы ',
                    '2 ст. л. соевого соуса ',
                    '2 ст. л. оливкового масла ',
                    'ст. л. мелко натертого имбиря ',
                    '8 шт. филе лосося, по 170 гр. '],
      photo:'/images/dish.jpg',
 
            //   printList : function(){
            //     <ul>
            //       {this.ingridients.map(item => {
            //         return <li key={item}>{item}</li>;
            //       })}
            //     </ul>
            //   }
     };
    return (
      <div className="App">
        <img className="photo" src={Dish.photo} alt="dish"/>
        <h1>{Dish.name}</h1>
        <div>
        <ul>
          {Dish.ingridients.map(item => {
            return <li style={{ listStyleType: "none", color:"orange" }} key={item}>{item}</li>;
          })}
        </ul>
        </div>
        <div style={{width:"50%", textAlign:"center", marginLeft:"350px"}}>
          <p>В небольшой кастрюле растопите сливочное масло, тростниковый сахар и мед на умеренном огне. 
            Снимите с плиты и взбейте венчиком, добавив горчицу, соевый соус, оливковое масло и имбирь. 
            Дайте остыть.
          </p>
          <p>Разогрейте сковороду. Смажьте лосось растительным маслом, посолите и поперчите по вкусу. 
          Выложите рыбу на сковородку кожей вниз. 
          Покройте лосося медово-горчичным соусом. 
          Для средней готовности жарьте рыбу в течение 6-8 минут, перевернув на 5-6 минуте приготовления. 
          </p>
        </div>
      </div>
    );
    }

//export default App;
//export default AppMusGroup;
//export default AppBook;
export default AppDish;
