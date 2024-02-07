export default function Button({children}){

  return(


    <button className="bg-primary hover:bg-sky-800 transform transition-transform duration-300 hover:scale-150 text-white font-semibold uppercase block mx-auto px-8 py-4 rounded-md	">
       {children}
    </button>


  )
  


}