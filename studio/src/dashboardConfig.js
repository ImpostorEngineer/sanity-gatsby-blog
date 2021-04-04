export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6069da0f407c81186aea1bff",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2p4fqu5q",
                  apiId: "7a8280a1-100f-4207-8794-940f0d713013",
                },
                {
                  buildHookId: "6069da0f0b2aa5863eb0fb90",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-agg2wn9y",
                  apiId: "a0247004-2e50-4d45-ae6c-6edba4671756",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ImpostorEngineer/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-agg2wn9y.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
