import { Blog } from "../Hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-between">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd 2023</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slat-600">Author</div>

            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>

              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author ablity to grab the users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
