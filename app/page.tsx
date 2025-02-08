import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Joel Gee Roy
      </h1>
      <p className="mb-4">
        I'm a Software Engineer at <a href="https://murf.ai">Murf</a>, working
        across the stack with React, FastAPI, and AWS.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
