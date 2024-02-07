import CardIcons from "../atoms/CardIcons"
import CardTitle from "../atoms/CardTitle"
import BarCard from "../atoms/BarCard"

export default function Cards({code, title}){

   return(
       <>
            <div class="w-full md:w-1/4 my-8 text-center">

               <CardIcons code={code}></CardIcons>
               <CardTitle>{title}</CardTitle>
               <BarCard></BarCard>

            </div>

       </>
   )





}