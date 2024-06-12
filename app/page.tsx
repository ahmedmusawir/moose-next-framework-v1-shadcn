import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row sm:flex-wrap justify-center gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={120}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
      </div>
      <PostsTable title="Latest Posts" />
    </main>
  );
}
