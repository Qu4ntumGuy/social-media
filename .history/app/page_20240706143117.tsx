import UserInformation from "@/components/UserInfomation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid">
      <section>
        {/* User Info */}
        <UserInformation />
      </section>
      <section>{/* Post Feed */}</section>
      <section>{/* Widget */}</section>
    </main>
  );
}
