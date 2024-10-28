---
id: add-new-note
title: Add a new note
hide_title: true
sidebar_position: 2
tags: ["dev-guide"]
last_update:
  date: 10/24/2024
  author: Tarek Liu
unlisted: true
---

## Add Content Note

1. Create a new file under folder `docs/<Category>`.

   **Template**

   ```

   ---
   id: simulate-a-neuron-with-pytorch
   title: Simulate a neuron with PyTorch
   hide_title: true
   sidebar_position: 3
   tags: ["pytorch", "implementation", "deep-learning", "computer-science"]
   draft: false
   last_update:
   date: 12/2/2022
   author: Tarek Liu
   ---

   (Import plugin here)
   import Image from "@theme/IdealImage";
   import Tabs from "@theme/Tabs";
   import TabItem from "@theme/TabItem";

   (Import image source here)
   import SimpleNeuron from "../assets/computer-science/Simple-Neuron.png";

   ```

2. Pick up proper tags for this note.

   Checkout `docs/tags.yml` for existing tags.

:::note
Tags picked up here are just for tags pages and showing up in the bottom of the article.

Tags for searching incategory page, please see more details in next step.
:::

3. Add note to Category Search Page.

   - Edit `src\data\notes.tsx` and register your note into object.

     ```
     const Notes: Note[] = [
         {
             title: "Simulate a neuron with PyTorch",
             description: "Implement neural network and simulate the all-or-none laws.",
             preview: require("./images/Simulate-a-neuron-with-PyTorch.png"),
             website: "./ComputerScience/simulate-a-neuron-with-pytorch",
             source:
             "https://colab.research.google.com/drive/1x36lSmRdi8dOPkjzhhjuF8AZbnQWOnzl?usp=sharing",
             tags: ["pinned", "implementation", "computer-science"],
         },
         {
             (Add your own note info here)
         }
     ];
     ```

   - Make sure `tags` contain proper category searchable tags, which also be defined in `src\data\notes.tsx`:

     ```
     export type TagType =
         // Note types
         | "pinned"
         | "implementation"
         | "insight"
         | "paper-reading"
         | "proof-of-concept"
         | "analysis"

         // Fields
         | "computer-science"
         | "statistic"
         | "psychology"
         | "behavioral-experiment"
         | "algorithm";
     ```

   - **Pin the article with `pinned` tag.**

## Add Dev-Guide Note

**Template**

```

---
id: add-new-note
title: Add a new note
hide_title: true
sidebar_position: 3
tags: ["dev-guide"]
last_update:
  date: 10/24/2024
  author: Tarek Liu
unlisted: true
---

```
