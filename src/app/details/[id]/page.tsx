import { Detail } from "@/app/movies/_components/DetailPage";

interface PageProps {
  params: {
    id: string;
  };
}
const DetailPage = async ({ params }: PageProps) => {
  const { id } = params;

  return <Detail id={id} />;
};
export default DetailPage;
