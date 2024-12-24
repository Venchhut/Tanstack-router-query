export interface Item {
  id: number;
  name: string;
  type: "folder" | "file";
  children?: Item[];
}
// src/data/folderData.ts
export const folderData: Item[] = [
  {
    id: 1,
    name: "My Drive",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Giaitch 1",
        type: "folder",
        children: [
          { id: 3, name: "File1.docx", type: "file" },
          { id: 4, name: "File2.png", type: "file" },
        ],
      },
      {
        id: 5,
        name: "Giaitch 2",
        type: "folder",
        children: [{ id: 6, name: "File3.pdf", type: "file" }],
      },
      {
        id: 7,
        name: "Giaitch 3",
        type: "folder",
        children: [{ id: 8, name: "File4.txt", type: "file" }],
      },
      {
        id: 9,
        name: "Giaitch 4",
        type: "folder",
        children: [
          {
            id: 10,
            name: "File5.txt",
            type: "folder",
            children: [
              {
                id: 11,
                name: "File6.txt",
                type: "file",
              },
              {
                id: 12,
                name: "File7.txt",
                type: "file",
              },
            ],
          },
          { id: 11, name: "File6.txt", type: "file" },
        ],
      },
    ],
  },
];
