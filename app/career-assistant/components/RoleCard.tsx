import LoadingButton from "./LoadingButton";

type RoleCardProps = {
  icon: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
};

export default function RoleCard({
  icon,
  title,
  description,
  features,
  buttonText,
  href,
}: RoleCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2"
          >
            <span className="text-green-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
  <LoadingButton href={href}>
    {buttonText}
  </LoadingButton>
</div>
    </div>
  );
}