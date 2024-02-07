import CardTitle from "../atoms/CardTitle"
import Link from "../atoms/Link"
export default function FooterLink(){

  return(
 
    <div className=" flex flex-col items-center md:pl-16 ">

      <CardTitle className="text-2xl text-white py-3 ml-2[-20px]">Quick link</CardTitle>

        <ul className="list-disc text-white pb-2">
         <Link className="md:hover:underline">lorem link</Link>
         <Link className="md:hover:underline">lorem link</Link>
         <Link className="md:hover:underline">lorem link</Link>
         <Link className="md:hover:underline">lorem link</Link>
        </ul>


    </div>



  )


}