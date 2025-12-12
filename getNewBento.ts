import fs from "fs/promises";
import path from "path";

const API_URL = "https://opbento.edgexhq.tech/api/bento?n=Hemanth&g=hemchdev&x=hemanthch.dev&l=hemanthsaich&i=https%3A%2F%2Fres.cloudinary.com%2Fdaafpg7r5%2Fimage%2Fupload%2Fv1765515231%2FIMG_20251211_143537_gjlhjx.jpg&p=https%3A%2F%2Fhemanthch.tech%2F&z=1b50e";
const README = path.resolve(process.cwd(), "README.md");
const START = "<!-- BENTO_IMAGE -->";
const END = "<!-- /BENTO_IMAGE -->";

async function fetchBento(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Bento API returned ${res.status}`);
  const json = await res.json();
  if (!json || typeof json !== "object" || !("url" in json)) {
    throw new Error("Unexpected API response shape");
  }
  // @ts-ignore
  return String((json as any).url);
}

function buildBlock(imageUrl: string) {
  const imgTag = `<img src="${imageUrl}" alt="Daily OP-Bento" width="900" loading="lazy" />`;
  const updated = `*(Updated: ${new Date().toISOString().replace("T", " ").replace("Z", " UTC")})*`;
  return `${START}\n\n${imgTag}\n\n${updated}\n\n${END}`;
}

async function main() {
  try {
    const imageUrl = await fetchBento(API_URL);

    let content = "";
    try {
      content = await fs.readFile(README, "utf8");
    } catch {
      content = "# hemchdev\n\n";
    }

    if (content.includes(START) && content.includes(END)) {
      const regex = new RegExp(`${START}[\\s\\S]*?${END}`, "m");
      const replacement = buildBlock(imageUrl);
      const newContent = content.replace(regex, replacement);
      if (newContent !== content) {
        await fs.writeFile(README, newContent, "utf8");
        console.log("README.md updated with new Bento image.");
      } else {
        console.log("No change needed for README.md.");
      }
    } else {
      const newContent = `${buildBlock(imageUrl)}\n\n${content}`;
      await fs.writeFile(README, newContent, "utf8");
      console.log("Bento block prepended to README.md (markers not found).");
    }
  } catch (err) {
    console.error("ERROR:", err);
    process.exit(1);
  }
}

main();
