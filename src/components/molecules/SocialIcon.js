import CardIcons from "../atoms/CardIcons"
export default function SocialIcon(){

  return(

        <div class="mt-2">

            <CardIcons 
             className={` ${"fa-brands fa-facebook"} ${"md:transform md:transition-transform md:duration-300 md:hover:scale-150"}  text-primary text-3xl`}>  
            </CardIcons>

            <CardIcons 
             className={` ${"fa-brands fa-square-instagram"} ${"md:transform md:transition-transform md:duration-300 md:hover:scale-150 px-5"}  text-primary text-3xl`}>  
            </CardIcons>

            <CardIcons 
             className={` ${"fa-brands fa-linkedin "} ${"md:transform md:transition-transform md:duration-300 md:hover:scale-150"}  text-primary text-3xl`}>  
            </CardIcons>


        </div>


 

  )


}