import { Film, Mail, Phone } from "lucide-react";

export const MovieFooter = () => {
  return (
    <footer className="bg-[#4338CA] w-full text-white text-sm py-10 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        {/* 🔹 Logo + Copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Film className="w-5 h-5" />
            Movie Z
          </div>
          <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        {/* 🔹 Contact info */}
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Contact Information</p>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <p className="flex flex-col "><p>Email:</p> support@movieZ.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <p className="flex flex-col"><p>Phone:</p> +976 (11) 123-4567</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-4 text-sm ">
          <p className="font-semibold">Follow us</p>
          <div className="flex  gap-2 md:gap-3">
            <a href="https://www.facebook.com/pinecone.academy.mongolia" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/pineconemongolia/" target="_blank">Instagram</a>
            <a href="https://x.com/pinecone" target="_blank">Twitter</a>
            <a href="https://www.youtube.com/@PineconeAcademy" target="_blank">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
