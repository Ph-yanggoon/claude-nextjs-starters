export function Greeting({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-4">
      <h1 className="text-2xl font-bold">안녕하세요, {name}님!</h1>
    </div>
  )
}
