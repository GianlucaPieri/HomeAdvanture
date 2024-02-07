export default function Bartime({children}){


   return(

       <h4 className="text-primary text-3xl before:content-[''] before:h-4
         before:w-4 before:bg-white before:border-2 before:border-solid 
         before:border-primary before:rounded-full before:absolute before:left-[-10px]">
           {children}
       </h4>
    


   )
 


}