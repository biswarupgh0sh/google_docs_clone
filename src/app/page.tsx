import Link from "next/link";


const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Click <Link href="/documents/123">here</Link></p>
    </div>
  )
}

export default Page;