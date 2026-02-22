import { createClient } from "@/prismicio";
import HeaderContent from "./HeaderContent";

export async function Header({ color }: { color: string }) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return <HeaderContent settings={settings} color={color} />;
}

export default Header;

