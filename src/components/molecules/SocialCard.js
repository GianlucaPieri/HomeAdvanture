import CardTitle from "../atoms/CardTitle"
import CardParagraph from "../atoms/CardParagraph";
import SocialIcon from "./SocialIcon";


export default function SocialCard(){

   return(
       <>
          
            <div className="w-full md:w-1/4 md:px-14 text-center my-10">
                
              <img class="block mx-auto rounded-full w-32 h-32 border-primary border-solid border-4 p-1 md:transform md:transition-transform md:duration-300 md:hover:scale-110 " src="./media/Montagna2.jpg" alt="" />
  

               <CardTitle className={"text-primary md:mt-8"} >Montagna1</CardTitle>
               <CardParagraph className={"text-xl font-semibold dark:text-white"} >A wonderful panorama to be enjoyed at least once in a lifetime</CardParagraph>
               <SocialIcon></SocialIcon>




            </div>

            <div className="w-full md:w-1/4 md:px-14 text-center my-10">
                
              <img class="block mx-auto rounded-full w-32 h-32 border-primary border-solid border-4 p-1 md:transform md:transition-transform md:duration-300 md:hover:scale-110 " src="./media/Montagna1.jpg" alt="" />
  

               <CardTitle className={"text-primary md:mt-8"} >Montagna2</CardTitle>
               <CardParagraph className={"text-xl font-semibold dark:text-white"} >A wonderful panorama to be enjoyed at least once in a lifetime</CardParagraph>
               <SocialIcon></SocialIcon>




            </div>

            <div className="w-full md:w-1/4 md:px-14 text-center my-10">
                
              <img class="block mx-auto rounded-full w-32 h-32 border-primary border-solid border-4 p-1 md:transform md:transition-transform md:duration-300 md:hover:scale-110 " src="./media/Montagna3.jpg" alt="" />
  

               <CardTitle className={"text-primary md:mt-8"} >Montagna3</CardTitle>
               <CardParagraph className={"text-xl font-semibold dark:text-white"} >A wonderful panorama to be enjoyed at least once in a lifetime</CardParagraph>
               <SocialIcon></SocialIcon>




            </div>

            <div className="w-full md:w-1/4 md:px-14 text-center my-10">
                
              <img class="block mx-auto rounded-full w-32 h-32 border-primary border-solid border-4 p-1 md:transform md:transition-transform md:duration-300 md:hover:scale-110 " src="./media/Montagna4.jpg" alt="" />
  

               <CardTitle className={"text-primary md:mt-8"} >Montagna4</CardTitle>
               <CardParagraph className={"text-xl font-semibold dark:text-white"} >A wonderful panorama to be enjoyed at least once in a lifetime</CardParagraph>
               <SocialIcon></SocialIcon>




            </div>

            

       </>
   )





}