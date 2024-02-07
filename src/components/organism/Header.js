import CardParagraph from "../atoms/CardParagraph";
import CardIcons from "../atoms/CardIcons";
export default function Header(){
  
  
  return (
    <>
      <header class="min-h-[100vh] bg-bgHeader dark:bg-bgHeaderDark bg-no-repeat bg-cover bg-center flex justify-center items-center ">

        <h1 class="bg-black bg-opacity-70 rounded-xl uppercase text-accent tracking-[20px] text-4xl md:text-8xl">ADVENTURE</h1>
        
      </header>


      <div class="py-10 pt-20 bg-secondary dark:bg-[#00081F] flex justify-center flex-wrap">


        <CardParagraph className={"font-semibold text-3xl w-1/2 dark:text-white"}>

         <CardIcons code={" fa-solid fa-quote-left "} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati perspiciatis ea magni rem? Provident autem, laborum harum, quisquam rerum cum exercitationem eum sequi ipsum eveniet nihil rem eaque deleniti.
         <CardIcons code={" fa-solid fa-quote-right "} />
         

        </CardParagraph>

         
       

      </div>
    </>
  )




}