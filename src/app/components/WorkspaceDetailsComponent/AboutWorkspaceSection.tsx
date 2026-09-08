export default function AboutWorkspaceSection({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="mb-3 text-lg lg:mt-6 mt-0 lg:text-[30px] font-bold text-gray-900">{name}</h2>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}