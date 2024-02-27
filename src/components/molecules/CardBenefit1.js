
import CardTitle from "../atoms/CardTitle"
import CardParagraph from "../atoms/CardParagraph"
export default function CardBenefit(){

    return (
        <>
            <h2 class="pt-20 uppercase text-primary mt-20 ml-20 text-6xl font-bold">
                our benefit
            </h2>

            <div class="w-full flex-wrap md:flex-nowrap ">

                <div class="md:ml-5  w-full text-center md:text-start px-5 py-6  ">

                    <CardTitle className={"text-primary"}>The Majestic Plant Life in the Mountains</CardTitle>
                    <CardParagraph className={"font-semibold dark:text-white"} >On the impervious peaks and in the silent valleys of the mountains, the    vegetation   expresses its strength and resilience in a harmonious dance with nature. In this alpine kingdom, plant life masterfully     adapts to extreme conditions, creating landscapes where biological diversity is a visual symphony.
                        The steep slopes and rocky ridges serve as a backdrop to coniferous forests, where mighty pines and firs defy the alpine climate. Their persistent green, a symbol of resistance, provides shelter to a variety of animal and fungal species, creating a delicate ecological balance.
                        In spring, the alpine meadows explode in a kaleidoscope of colour. Wildflowers such as gentians, edelweiss and edelweiss paint the ground in vibrant shades, attracting butterflies and bees in search of nectar. The brevity of the growing season amplifies the beauty of this ephemeral spectacle.</CardParagraph>

                </div>



                <div className="w-full justify-center">

                    <img className="block mx-auto my-auto rounded-full w-52 h-52 border-primary border-solid border-4 p-1 md:mr-96 md:w-[300px] md:h-[300px]" src="./media/landscape.jpg" alt="" />

                </div>

            </div>

        </>  

    )


}