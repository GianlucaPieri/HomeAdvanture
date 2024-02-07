import Cards from "../molecules/Cards"

export default function CardBarIcons(){
    
    

   const services = [

      {id: 1, code: " fa-solid fa-snowflake "  , title: "Temperature"},
      {id: 2, code: " fa-solid fa-mountain "  , title: "Altitude"},
      {id: 3, code: " fa-solid fa-map-location-dot "  , title: "Itinerary"},
      {id: 4, code: " fa-solid fa-tent "  , title: "Camping Locations"},

   ]

    return(
     

        <div class="bg-secondary py-52 flex flex-wrap justify-center items-center dark:text-white dark:bg-[#00081F] ">

            {
             
             services.map((service)=>{
                
                return (

                    <Cards
                      key={service.id}
                      code={service.code}
                      title={service.title}

                    />
                )
             })

            }
        </div>
    )
}