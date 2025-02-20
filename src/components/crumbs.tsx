import { useState } from "react";
import { Breadcrumbs, Anchor, Menu } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

// Sample Folder Data
const initialPath = [
  { id: 1, name: "Root" },
  { id: 2, name: "Folder1" },
  { id: 3, name: "Folder2" },
  { id: 4, name: "Folder3" },
  { id: 5, name: "Current Folder" },
];

function GoogleDriveBreadcrumbs() {
  const [path, setPath] = useState(initialPath);

  // Handle folder navigation
  const handleNavigate = (index: number) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
  };

  // Determine which items to collapse
  const shouldCollapse = path.length > 3;
  const visibleItems = shouldCollapse
    ? [path[0], "...", ...path.slice(-2)]
    : path;

  return (
    <Breadcrumbs
      separator="›"
      separatorMargin="sm"
      mt="xs"
      style={{
        backgroundColor: "#1e1e1e",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "14px",
        color: "#fff",
      }}
    >
      {visibleItems.map((folder, index) => {
        if (folder === "...") {
          return (
            <Menu key="collapsed-menu" withinPortal>
              <Menu.Target>
                <Anchor
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconDots size={18} />
                </Anchor>
              </Menu.Target>
              <Menu.Dropdown>
                {path.slice(1, -2).map((hiddenFolder, hiddenIndex) => (
                  <Menu.Item
                    key={hiddenFolder.id}
                    onClick={() => handleNavigate(hiddenIndex + 1)}
                  >
                    {hiddenFolder.name}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          );
        }
        return (
          <Anchor
            onClick={() => handleNavigate(index)}
            style={{
              cursor: "pointer",
              fontWeight: index === path.length - 1 ? 700 : 400,
              color: index === path.length - 1 ? "#1a73e8" : "#e0e0e0",
              "&:hover": {
                textDecoration: "underline",
                color: "#0b57d0",
              },
            }}
          >
            {typeof folder === "object" ? folder.name : folder}
          </Anchor>
        );
      })}
    </Breadcrumbs>
  );
}

export default GoogleDriveBreadcrumbs;
