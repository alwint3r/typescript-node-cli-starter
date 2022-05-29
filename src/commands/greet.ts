import { CommandBuilder } from "yargs";

export const command = "greet";

export const desc = "Greet someone";

type Options = {
  name: string;
};

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.option("name", {
    alias: "n",
    describe: "Name to greet",
    type: "string",
    demandOption: true,
  });

export const handler = async (options: Options) => {
  console.log(`Hello, ${options.name}!`);
};
