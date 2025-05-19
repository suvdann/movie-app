import { Detail } from "@/app/movies/_components/DetailPage";
import { MobileDetail } from "@/app/movies/_components/MobileDetails";

interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = params;
  // console.log(id);
  return (
    <div>
      <div className="  hidden lg:block    ">
        <Detail id={id} />
      </div>
      <div className=" block lg:hidden ">
        <MobileDetail id={id} />
      </div>
    </div>
  );
};
export default DetailPage;
