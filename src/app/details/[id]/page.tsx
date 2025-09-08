// ⚠️ Энэ файл дээр "use client" хэрэггүй (Server Component)

import { Detail } from "@/app/movies/_components/DetailPage";
import { MobileDetail } from "@/app/movies/_components/MobileDetails";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>; // ⬅️ Promise болгов
}) {
  const { id } = await params; // ⬅️ заавал await

  return (
    <div>
      <div className="hidden lg:block">
        <Detail id={id} />
      </div>
      <div className="block lg:hidden">
        <MobileDetail id={id} />
      </div>
    </div>
  );
}

// Хэрэв generateMetadata байгаа бол бас Promise-оо await хийнэ:
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return { title: `Movie ${id}` };
}
