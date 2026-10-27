
import { readFile } from "node:fs/promises";
import { put } from "@vercel/blob";

const foto = await readFile("public/pecas/images1.jpg");

if (foto.length > 2 * 1024 * 1024) {
  throw new Error("A foto deve ter até 2 MB");
}

const blob = await put("pecas/images1.jpg", foto, {
  access: "public",
  addRandomSuffix: true,
  contentType: "image/jpeg",
});

console.log("Foto enviada:", blob.url);
