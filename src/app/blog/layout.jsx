import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>this is blog</h1>
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;
