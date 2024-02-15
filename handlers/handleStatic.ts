import { response } from 'helpers';

export const handleStatic = async (fileName: string) => {
  const file = Bun.file(`static/${fileName}`);

  const hasFile = await file.exists();

  return hasFile ? new Response(file) : response.notFound();
};
