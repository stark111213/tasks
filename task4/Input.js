import InputValidation from "./InputValidation.js";

class Input {

  constructor(args) {

    this.iv = new InputValidation();

    this.iv.errorLength(args);

    const [boxesArg, filePath, className] = args;
    const boxes = parseInt(boxesArg, 10);

    this.iv.errorBoxes(boxes, boxesArg);
    this.iv.errorFilePath(filePath);

    const allowedClasses = ["ClassicMorty", "LazyMorty"];
    this.iv.errorAllowedClasses(className, allowedClasses);

    this.boxes = boxes;
    this.filePath = filePath;
    this.className = className;
  }
}

export default Input;
