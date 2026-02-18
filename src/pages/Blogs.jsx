import React, { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import BlogListItem from "../components/BlogListItem";

export default function Blogs() {
    const {blogsData} = useRouteLoaderData("root")

    return (
        <Suspense fallback={<LoadingSpinner/>}>
            <Await resolve={blogsData}>
                {(blogs) => {
                    return (<div className="flex flex-col gap-4 mt-8">
                                {blogs.map((blog) => (
                                    <BlogListItem 
                                        key={blog.id ?? blog.slug} 
                                        blog={blog} 
                                    />
                                ))}
                            </div>);
                }}
            </Await>
        </Suspense>
    )
}