export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Marco Caldera",
  description: "Personal Notes",
  mainNav: [
    {
      title: "Notes",
      href: "/blog",
      shortcut: "N",
    },
    // {
    //   title: "Projects",
    //   href: "/projects",
    //   shortcut: "P",
    // },
    // {
    //   title: "Goals",
    //   href: "/goals",
    //   shortcut: "G",
    // },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/marco-caldera/",
    github: "https://github.com/marcocaldera",
    goodreads: "https://www.goodreads.com/user/show/142831824-marco-caldera",
    editNote:
      "https://github.com/marcocaldera/notes.marcocaldera.com/edit/main/app/blog/",
    quotesAutomation:
      "https://github.com/marcocaldera/marcocaldera/blob/main/scripts/update_quote.py",
    blog: "/blog",
    goals: "/goals",
    projects: "/projects",
  },
}
