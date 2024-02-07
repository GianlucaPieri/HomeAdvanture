import FooterLink from "../molecules/FooterLink"
import FooterCard from "../molecules/FooterCard"
export default function Footer(){

    return (
        <>
            <div>
                <img class="w-full" src="./media/other.png" alt="" />
            </div>



            <div class="bg-[#0a5c0a] py-10 px-20 md:flex md:items-center">

                <FooterCard></FooterCard>
                
                <FooterLink></FooterLink>
                 

            </div>
        </>


    )




}