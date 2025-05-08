import { Editor } from "./editor";

interface documentIdProps {
    params: Promise<{ documentId: string  }>;
}

const DocumentIdPage = async ({ params }: documentIdProps) => {
    const { documentId } = await params;
  return (
    <div>
      page: {documentId}
      <Editor/>
    </div>
  )
}

export default DocumentIdPage;