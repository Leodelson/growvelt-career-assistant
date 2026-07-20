import LoadingButton from "./LoadingButton";

type ToolCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export default function ToolCard({
  icon,
  title,
  description,
  href,
}: ToolCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-1 text-gray-600">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <LoadingButton href={href}>
          Open Tool
        </LoadingButton>
      </div>
    </div>
  );
}