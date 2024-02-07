import CardParagraph from "../atoms/CardParagraph"
import CardTitle from "../atoms/CardTitle"
export default function PageVenture({className}){

    return(
        <>
            <div className={` ${className} w-full md:w-[450px] text-center py-10 px-10`}>

                <CardTitle className={`${"text-primary"}`} >Venture</CardTitle>

                <CardParagraph className={"font-medium text-2xl"}>Venturing into the mountains is a fascinating and stimulating experience, full of challenges and rewards. Before
                    embarking on this adventure, it is essential to prepare adequately to ensure a safe and exciting excursion. The
                    mountain offers breathtaking views, but its beauty is often accompanied by challenging terrain and changing weather
                    conditions.
                </CardParagraph>


                <CardParagraph className={"font-medium text-2xl"} >Venturing into the mountains is a fascinating and stimulating experience, full of challenges and rewards. Before
                    embarking on this adventure, it is essential to prepare adequately to ensure a safe and exciting excursion. The
                    mountain offers breathtaking views, but its beauty is often accompanied by challenging terrain and changing weather
                    conditions.
                </CardParagraph>

            </div>

  
        </>


    )



}