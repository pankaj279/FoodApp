import React, { useState } from 'react';
import Menu from './Menu';

const Collection = () => {

  const [data, setData] = useState(Menu)
  const [filter, setFilter] = useState("");

  const InputEvent = (event) => {
    setFilter(event.target.value);
  }
  // console.log(search);

  let dataSearch = data.filter(elem => {
    return Object.keys(elem).some(key =>
      
      elem[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });
  
  const filterData = (categdata) => {
    const updateddata = Menu.filter((elem) => {
      return elem.category === categdata;
      
    });
    setData(updateddata);
  }
  return (
    
    
    <>
      <div className="text-center font-bold text-2xl my-5 md:text-3xl ">
        <p>Pankaj Fast Food Center</p>
        <hr /> 
        <div className="my-4">
          <input type="search" placeholder="search" className="border-2 text-center text-2xl" value={filter}
          onChange={InputEvent.bind(this)}
          />
        </div>
      </div>

     <div className="  space-x-3  text-center text-xl my-5 md:space-x-10   md:text-left md:ml-10 md:my-0">
        <button className="bg-red-400 p-2 rounded-md" onClick={()=>filterData('breakfast')}>Breakfast</button>
        <button className="bg-red-400 p-2 rounded-md" onClick={()=>filterData('lunch')} >Lunch</button>
        <button className="bg-red-400 p-2 rounded-md">Dinner</button>
        <button className="bg-red-400 p-2 rounded-md" onClick={()=>setData(Menu)}>All</button>
      </div>

      <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 ">
        {
          dataSearch.map((elem) => {
            // const { id } = elem;
            return (
              <div>
                
              <div className="max-w-md mx-auto shadow-md rounded-md overflow-hidden border-2 md:max-w-2xl md:my-5 md:mx-5   ">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src={elem.img} alt="hero" />
                </div>
                  <div className="p-8">
                     
                      <p className="block mt-1 text-2xl  leading-tight font-bold  text-black hover:underline">{elem.dish}</p>
                      <p class="mt-2 text-lg text-gray-500 ">{elem.price}</p>
                      <div className=" text-center md:text-left">
                      <button className="mt-3 border-2 p-1 rounded-md hover:bg-yellow-300 ">Buy Now</button>
                        </div>            
    </div>
    
              </div>
                  </div>
                </div>
                
            )
          })
        }
        </div>

       
          
            
 </>           
      )
    
}
export default Collection;