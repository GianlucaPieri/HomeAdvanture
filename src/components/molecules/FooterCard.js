import CardTitle from "../atoms/CardTitle"
import CardParagraph from "../atoms/CardParagraph"
export default function FooterCard(){
  
    return(

        <div className="w-full md:w-8/12 text-center md:text-start mx-[-1px]">

            <h2 className="uppercase text-5xl text-white pt-10 ">LOREM</h2>

             <CardTitle className=" text-white py-5"> Testo generico</CardTitle>
             <CardParagraph className={"text-white"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, reiciendis odio sunt explicabo libero, sit totam possimus delectus eveniet cupiditate sequi? Quo magni aperiam repellat recusandae officia ipsum saepe voluptates?</CardParagraph>
             <CardParagraph className={"text-white"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, reiciendis odio sunt explicabo libero, sit totam possimus delectus eveniet cupiditate sequi? Quo magni aperiam repellat recusandae officia ipsum saepe voluptates?</CardParagraph>
           
        </div>

    )

  


}