import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { section, html, selection } = req.body;

    const entry = `\n--- Section ${section} ---\n${html}\nSelection: ${JSON.stringify(selection)}\n`;

    const filePath = path.join(process.cwd(), "journal.txt");

    fs.appendFile(filePath, entry, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to save" });
      }
      res.status(200).json({ message: "Saved successfully!" });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
