class Input {

  constructor(args) {

    this.errorLength(args);

    const [boxesArg, filePath, className] = args;
    const boxes = parseInt(boxesArg, 10);

    this.errorBoxes(boxes, boxesArg);
    this.errorFilePath(filePath);

    const allowedClasses = ["ClassicMorty", "LazyMorty"];
    this.errorAllowedClasses(className, allowedClasses);

    this.boxes = boxes;
    this.filePath = filePath;
    this.className = className;
  }

  error(message) {
    console.error("Error:", message);
    process.exit(1);
  }

  errorLength(args) {
    if (args.length < 3) {
      this.error(
        `Not enough arguments provided.\n\n` +
        `Usage: node Game.js <boxes> <filePath> <className>\n` +
        `Example: node Game.js 3 ./LazyMorty.js LazyMorty`
      );
    }
  }

  errorFilePath(filePath) {
    if (!filePath || !filePath.endsWith(".js")) {
      this.error(
        `Invalid file path: "${filePath || "missing"}".\n` +
        `You must provide a valid JavaScript file path.\n` +
        `Example: node Game.js 3 ./LazyMorty.js LazyMorty`
      );
    }
  }

  errorBoxes(boxes, boxesArg) {
    if (isNaN(boxes) || boxes <= 2) {
      this.error(
        `Invalid box count: "${boxesArg}".\n` +
        `The number of boxes must be an integer greater than 2.\n` +
        `Example: node Game.js 3 ./LazyMorty.js LazyMorty`
      );
    }
  }

  errorAllowedClasses(className, allowedClasses) {
    if (!className || !allowedClasses.includes(className)) {
      this.error(
        `Invalid class name: "${className || "missing"}".\n` +
        `Only the following Morty types are supported: ${allowedClasses.join(", ")}.\n` +
        `Example: node Game.js 3 ./ClassicMorty.js ClassicMorty`
      );
    }
  }
}

export default Input;
