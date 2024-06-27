import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Robot Remote Control System",
    description:
      "Robotics remote-control system using gRPC, with a Flask server and an Android app as client.",
    url: "https://github.com/liuyuweitarek/Kebbi-Remote-Control-System",
    image: require(`${assetsDir}/Robot-Remote-Control-System.png`),
    role: "Author",
  },
  {
    title: "Asynchronously Embedding Psychological Test Questions into Human–Robot Conversations for User Profiling",
    description: "A conceptual validation of the potential use of psychological questionnaires in everyday settings, utilizing the Ten Item Personality Measure (TIPI) to examine the feasibility of asynchronous administration by a robot.",
    url: "https://link.springer.com/article/10.1007/s12369-020-00716-y",
    image: require(`${assetsDir}/Asychronously-Psy-Questions.png`),
    role: "Developer & Second Author",
  },
  {
    title: "Attempt to Implement Psychological Assessments into Human-Robot Interaction.",
    description: "Using robot to capture human althentic behaviors, and bringing psychological experiments into real-world interaction.",
    url: "https://youtu.be/nod_fIbyC_E?si=n-fVObJAVskROxaJ",
    image: require(`${assetsDir}/Implement-Psy-Real-World.png`),
    role: "Developer",
  },
  {
    title: "Template: Flutter Docker",
    description: "Flutter project template which able to quickly create a Flutter Web App environment through docker and develop with VSCode.",
    url: "https://liuyuweitarek.github.io/flutter-docker-template/",
    image: require(`${assetsDir}/docker-flutter-template.png`),
    role: "Author",
  },
  {
    title: "Template: Python Poetry WSL2-Ubuntu-GPU Docker",
    description: "Docker-based Python development template using Poetry and GPU support for PyTorch, compatible with Windows WSL2 and Ubuntu. Includes Jekyll for GitHub Pages documentation.",
    url: "https://liuyuweitarek.github.io/python-poetry-wsl2-ubuntu-gpu-docker-template/",
    image: require(`${assetsDir}/python-poetry-wsl2-ubuntu-gpu-docker-template.png`),
    role: "Author",
  },
  {
    title: "VScode Theme: Tarek Dark",
    description: "The VScode theme which supports semantic highlighting in Python. Could be installed through VScode Extension section.",
    url: "https://marketplace.visualstudio.com/items?itemName=LiuYuweiTarek.tarek-dark",
    image: require(`${assetsDir}/Tarek-Dark.png`),
    role: "Author",
  }
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
