/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

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
  | "statistics"
  | "psychology"
  | "behavioral-experiment"
  | "algorithm";

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
];

export type Note = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  pinned: {
    label: translate({ message: "Pinned" }),
    description: translate({
      message: "Notes that are important.",
      id: "tagsearch.tag.pinned.description",
    }),
    color: "#e96666",
  },

  implementation: {
    label: translate({ message: "Implementation" }),
    description: translate({
      message: "We only know what we make.",
      id: "tagsearch.tag.implementation.description",
    }),
    color: "#6671e9",
  },

  insight: {
    label: translate({ message: "insight" }),
    description: translate({
      message: "Notes that record my insights and segment of inspired memory.",
      id: "tagsearch.tag.insight.description",
    }),
    color: "#39ca30",
  },

  "paper-reading": {
    label: translate({ message: "Paper Reading Notes" }),
    description: translate({
      message: "Notes that generated from papers I chew!",
      id: "tagsearch.tag.paper-reading.description",
    }),
    color: "#dfd545",
  },

  "proof-of-concept": {
    label: translate({ message: "Proof of Concept" }),
    description: translate({
      message: "Simple cases that minimized the question and varified it.",
      id: "tagsearch.tag.proof-of-concept.description",
    }),
    color: "#a44fb7",
  },

  analysis: {
    label: translate({ message: "Analysis" }),
    description: translate({
      message: "Data mining or replicating interesting result from materials.",
      id: "tagsearch.tag.analysis.description",
    }),
    color: "#fe6829",
  },

  "computer-science": {
    label: translate({ message: "Computer Science" }),
    description: translate({
      message: "Docs related to Computer Science.",
      id: "tagsearch.tag.computer-science.description",
    }),
    color: "#127f82",
  },

  statistics: {
    label: translate({ message: "Statistics" }),
    description: translate({
      message: "Docs related to Statistics Methods or Concepts.",
      id: "tagsearch.tag.statistics.description",
    }),
    color: "#8c2f00",
  },

  psychology: {
    label: translate({ message: "Psychology" }),
    description: translate({
      message: "Docs related to Psychology.",
      id: "tagsearch.tag.psychology.description",
    }),
    color: "#4267b2", // Facebook blue
  },

  "behavioral-experiment": {
    label: translate({ message: "Behavioral Experiment" }),
    description: translate({
      message: "Docs related to Behavioral Experiment.",
      id: "tagsearch.tag.behavioral-experiment.description",
    }),
    color: "#14cfc3",
  },

  algorithm: {
    label: translate({ message: "Algorithm" }),
    description: translate({
      message: "Docs related to Algorithm.",
      id: "tagsearch.tag.algorithm.description",
    }),
    color: "#ffcfc3",
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortNotes() {
  let result = Notes;
  // Sort by site name
  result = sortBy(result, (note) => note.title.toLowerCase());
  // Sort by implementation tag, implementations first
  result = sortBy(result, (note) => !note.tags.includes("pinned"));
  return result;
}

export const sortedNotes = sortNotes();
