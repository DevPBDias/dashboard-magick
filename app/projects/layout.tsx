import HeaderProjects from "@/components/projects/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4 flex flex-col gap-4 justify-center items-start w-full">
      <HeaderProjects projectName="My projects" />
      {children}
    </main>
  );
}
