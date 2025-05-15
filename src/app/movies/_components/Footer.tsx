import { Film, Mail, Phone } from "lucide-react"

export const MovieFooter=()=>{
    return(
      <div className=" bg-[#4338CA] w-full h-[280px] mb-[1px]">
        <div className="text-[white] p-[40px]">
              <div className="flex items-center"><Film className="w-5 h-5 " />
            Movie Z</div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
        <div className="flex flex-col ml-[369px] ">
            <Mail/>
            Email:
            support@movieZ.com
           <Phone /><p>Phone: +976 (11) 123-4567</p>
        </div>
        <div className="flex flex-col">
         <p>Follow us</p>
        <div className="flex justify-center gap-4">
         
           <a href="https://www.facebook.com/pinecone.academy.mongolia"> Facebook</a> 
           <a href="https://www.instagram.com/pineconemongolia/"> Instagram</a> 
           <a href="https://x.com/pinecone"> Twitter</a> 
           <a href="https://www.youtube.com/@PineconeAcademy"> Youtube</a> 
        </div>
        </div>
        </div>
      </div>
    )
}