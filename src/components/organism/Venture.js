import PageVenture from "../molecules/PageVenture";
import ButtSfondo from "../molecules/ButtSfondo";

export default function Venture(){

    return (
        <>
            <div class="bg-secondary flex-col md:flex md:flex-row justify-between mx-10 dark:text-white dark:bg-[#00081F] ">

                <PageVenture className={"text-start"}></PageVenture>

                <PageVenture className={"text-right"}></PageVenture>


            </div>

            <ButtSfondo></ButtSfondo>

        </>

    )


}