class InputValidation {

  error(message) {
    console.error("Error:", message);
    process.exit(1);
  }

  errorLength(args) {
    if (args.length < 3) {
      this.error(
        `Not enough arguments provided.\n\n` +
        `Usage: node Game.js <boxes> <filePath> <className>\n` +
        this.getExample()
      );
    }
  }

  errorFilePath(filePath) {
    if (!filePath || !filePath.endsWith(".js")) {
      this.error(
        `Invalid file path: "${filePath || "missing"}".\n` +
        `You must provide a valid JavaScript file path.\n` +
        this.getExample()
      );
    }
  }

  errorBoxes(boxes, boxesArg) {
    if (isNaN(boxes) || boxes <= 2) {
      this.error(
        `Invalid box count: "${boxesArg}".\n` +
        `The number of boxes must be an integer greater than 2.\n` +
        this.getExample()
      );
    }
  }

  errorAllowedClasses(className, allowedClasses) {
    if (!className || !allowedClasses.includes(className)) {
      this.error(
        `Invalid class name: "${className || "missing"}".\n` +
        `Only the following Morty types are supported: ${allowedClasses.join(", ")}.\n` +
        this.getExample()
      );
    }
  }

  getExample = () => `Example: node Game.js 3 ./LazyMorty.js LazyMorty`;
}

export default InputValidation;
