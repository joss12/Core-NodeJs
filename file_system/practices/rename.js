const fs = require("fs/promises");

(async () => {
  //commands
  const RENAME_FILE = "rename the file";

  const renameFile = async (oldPath, newPath) => {
    try {
      await fs.rename(oldPath, newPath);
      console.log("The file was successfully renamed.");
    } catch (e) {
      if (e.code === "ENOENT") {
        console.log(
          "No file at this path to rename, or the destination doesn't exist."
        );
      } else {
        console.log("An error occurred while removing the file: ");
        console.log(e);
      }
    }
  };

  const commandFileHandler = await fs.open("./command.txt", "r");
  commandFileHandler.on("change", async () => {
    const size = (await commandFileHandler.stat()).size;
    const buff = Buffer.alloc(size);
    const offset = 0;
    const length = buff.byteLength;
    const position = 0;

    await commandFileHandler.read(buff, offset, length, position);
    const command = buff.toString("utf-8");

    // rename file:
    // rename the file <path> to <new-path>
    if (command.includes(RENAME_FILE)) {
      const _idx = command.indexOf(" to ");
      const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx);
      const newFilePath = command.substring(_idx + 4);

      renameFile(oldFilePath, newFilePath);
    }
  });

  //watcher
  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
