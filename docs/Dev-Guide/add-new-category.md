---
id: add-new-category
title: Add a new category
hide_title: true
sidebar_position: 3
tags: ["dev-guide"]
last_update:
  date: 10/24/2024
  author: Tarek Liu
unlisted: true
---

:::warning
Watch out naming format!

If new category named \"New Category\", then:

- \<new-category-folder-name\>: \"NewCategory\"
- \<new-category-tag\>: \"new-category\"
- \<new-category-tag-brief\>: \"nc\"
- \<new-category-tag-label\>: \"New Category\"
  :::

1. Create a new folder under `docs` folder, like `docs/NewCategory`.

2. Add a category tag in `docs/tags.yml` file.

   - Make sure the tag name is not duplicated.
   - Tag name should be lowercase and separated by `-`.

     e.g. ComputerScience => computer-science

3. Make new category be searchable in "Category Search Page".

   - Edit `src\data\notes.tsx` and register your note into object.

     1. Add tag

     ```
     export type TagType =
       (Add new category tags here)
       | <new-category-tag-name>
     ```

     2. Edit tag info

     ```
     export const Tags: { [type in TagType]: Tag } = {
       <new-category-tag-name>: {
         label: translate({ message: "<new-category-tag-label>" }),
         description: translate({
           message: "<new-category-tag-description>",
           id: "tagsearch.tag.<new-category-tag-name>.description",
         }),
         color: "<new-category-tag-color>", -> hex code
       },
     };
     ```

4. Add new category `index.mdx` in `docs/<NewCategory>` folder.

   **`index.mdx`**

   ```
   ---
   id: <new-category-tag>
   title: <new-category-tag-label>
   tags: ["manual", <new-category-tag-label>]
   hide_title: true
   hide_table_of_contents: true
   displayed_sidebar: <new-category-tag-brief>Sidebar
   sidebar_position: 2 -> Check current sidebar position
   last_update:
     date: 6/24/2024 -> MM/DD/YYYY, Check current date
     author: Tarek Liu -> Your name
   ---

   import TagSearchNotes from "@site/src/components/tagsearch/index";

   <TagSearchNotes
     title="<new-category-tag-label>"
     description="<new-category-tag-description>"
   />
   ```

5. Add new category's sidebar in `sidebars.js`.

   New category's sidebar name is `<new-category-tag-brief>Sidebar`, e.g. `ncSidebar`. Items obj name would be like `ncItems`.

   - Add new category into home sidebar

     **`sidebars.js`**

     ```
     const homeItems = [
       {
         type: 'category',
         label: '<new-category-tag-label>',
         className: '<new-category-tag>',
         link: {
           type: 'generated-index',
           slug: '<new-category-tag-folder-name>?tags=<new-category-tag>&operator=AND',
         },
         collapsed: true,
         items: [
           {
             type: "autogenerated",
             dirName: "<new-category-tag-folder-name>",
           }
         ],
       },
     ]

     ```

   - Add new category into note category sidebar
     **`sidebars.js`**
     ```
     const ncItems = [
       {
         type: 'link',
         href: '/docs/note',
         label: 'Back to Home',
       },
       {
         type: 'link',
         href: '/docs/<new-category-tag-folder-name>?tags=<new-category-tag>&operator=AND',
         label: 'Search',
       },
       {
         type: "autogenerated",
         dirName: "<new-category-tag-folder-name>"
       }
     ]
     ```
     ```
     const sidebars = {
       homeSidebar: homeItems,
       ncSidebar: ncItems --> Edit here!
     };
     ```

6. (Optional) Customize `autogenerated` sidebar items

   At **`docusaurus.config.ts`**

   ```
   presets: [
     [
       {
         docs: {
           sidebarItemsGenerator: async function sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
             const sidebarItems = await defaultSidebarItemsGenerator(args);
             return skipIndex(sidebarItems);
           },
         }
       }
     ]
   ]
   ```

   Function `skipIndex` controls whether to skip some pages.

   ```
   const skipRenderNoteIDs = [
     "Psychology/psychology",
     "ComputerScience/computer-science",
   ]

   const retainLabels = [
     "Search",
     "Back to Home"
   ];

   function skipIndex(items) {
     if (typeof items !== "undefined"){
       return items.filter(({ type, id, label }) => {
         return (type === 'doc' && !skipRenderNoteIDs.includes(id))
         || retainLabels.includes(label);
       });
     }
     return [];
   }
   ```
