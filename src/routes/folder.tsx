import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { folderData } from "../data/folderData";

export const Route = createFileRoute("/folder")({
  component: FolderExplorer,
});

interface Item {
  id: number;
  name: string;
  type: "folder" | "file";
  children?: Item[];
}

function FolderExplorer() {
  // State to track the breadcrumb trail (folder navigation history)
  const [breadcrumb, setBreadcrumb] = useState<Item[]>([
    folderData[0],
  ] as Item[]);

  // Current folder is always the last item in the breadcrumb array
  const currentFolder = breadcrumb[breadcrumb.length - 1];

  // Handle folder click to navigate deeper
  const handleFolderClick = (folder: Item) => {
    if (folder.type === "folder" && folder.children) {
      setBreadcrumb([...breadcrumb, folder]);
    }
  };

  // Handle breadcrumb navigation to a specific folder
  const handleBreadcrumbClick = (index: number) => {
    setBreadcrumb(breadcrumb.slice(0, index + 1));
  };

  return (
    <div style={{ padding: "20px", background: "#121212", color: "white" }}>
      {/* Breadcrumb Navigation */}
      <div style={{ marginBottom: "10px" }}>
        {breadcrumb
          .map((folder, index) => (
            <span
              key={folder.id}
              onClick={() => handleBreadcrumbClick(index)}
              style={{
                cursor: "pointer",
                color: index === breadcrumb.length - 1 ? "white" : "gray",
                marginRight: "5px",
              }}
            >
              {folder.name}
            </span>
          ))
          .reduce((prev, curr) => (
            <>
              {prev} <span> / </span> {curr}
            </>
          ))}
      </div>
      <hr />

      {/* Folder Contents */}
      <h2>📁 {currentFolder.name}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentFolder.children?.map((item) => (
          <li
            key={item.id}
            onClick={() => handleFolderClick(item)}
            style={{
              cursor: item.type === "folder" ? "pointer" : "default",
              margin: "5px 0",
            }}
          >
            {item.type === "folder" ? "📁" : "📄"} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
