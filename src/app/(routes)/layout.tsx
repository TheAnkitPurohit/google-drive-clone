/* eslint-disable react/no-children-prop */
import LayoutProvider from "@/providers/layout-provider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider children={children} />;
}
