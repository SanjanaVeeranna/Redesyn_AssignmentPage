import DesktopWrap from "@/utils/DesktopWrap";
import MobileWrap from "@/utils/DesktopWrap";
import Profile from "@/utils/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DesktopWrap>
        <Profile />
      </DesktopWrap>
    </main>
  );
}
