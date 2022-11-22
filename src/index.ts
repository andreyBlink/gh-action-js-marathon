import { getInput } from "@actions/core";
import { context } from "@actions/github";

type GithubContext = typeof context;

const inputName = getInput("name");

greet(inputName, "");

function greet(name: string, repoUrl: string) {
  console.log(`'Hello ${name}! You are running a GH Action in ${repoUrl}'`);
}
