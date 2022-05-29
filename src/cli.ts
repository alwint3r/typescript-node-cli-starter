#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .alias({
    h: "help",
  })
  .commandDir('commands')
  .demandCommand()
  .strict().argv;
