import { Detail } from "@/app/movies/_components/DetailPage";


interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage =async ({ params }: PageProps) => {
  const { id } = params;
// console.log(id);
  return (
  <div>
 

  <Detail id={id}   />
  </div>
  )
};
export default DetailPage;
