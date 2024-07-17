import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInfomation";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
// import PostFeed from "@/components/PostFeed";
// import PostForm from "@/components/PostForm";
// import Widget from "@/components/Widget";
// import { Post } from "@/mongodb/models/post";
// import { SignedIn } from "@clerk/nextjs";
// import connectDB from "@/mongodb/db";

export default function Home() {
  const user = currentUser();

  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        <UserInformation />
      </section>

      <section className="col-span-full md:col-span-6 xl:col-span-4 xl:max-w-xl mx-auto w-full">
        {/* <SignedIn> */}
        <PostForm />
        {/* </SignedIn> */}
        {/* <PostFeed posts={posts} />/ */}
      </section>

      <section className="hidden xl:inline justify-center col-span-2">
        {/* <Widget /> */}
      </section>
    </div>
  );
}
