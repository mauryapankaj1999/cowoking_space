export default function AboutWorkspaceSection({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="mb-3 text-[30px] font-bold text-gray-900">{name}</h2>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}