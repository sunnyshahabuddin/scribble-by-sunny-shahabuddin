import React, { useState } from "react";

import { Search, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import Form from "./Form";

const SideMenuBar = () => {
  const [isCategorySearchCollapsed, setIsCategorySearchCollapsed] =
    useState(true);
  const [isCategoryAddCollapsed, setIsCategoryAddCollapsed] = useState(true);

  return (
    <MenuBar showMenu className="flex" title="Articles">
      <MenuBar.Block active count={67} label="All" />
      <MenuBar.Block count={15} label="Drafts" />
      <MenuBar.Block count={52} label="Published" />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () => {
              setIsCategoryAddCollapsed(true),
                setIsCategorySearchCollapsed(
                  isCategorySearchCollapsed => !isCategorySearchCollapsed
                );
            },
          },
          {
            icon: Plus,
            onClick: () => {
              setIsCategorySearchCollapsed(true),
                setIsCategoryAddCollapsed(
                  isCategoryAddCollapsed => !isCategoryAddCollapsed
                );
            },
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          CATEGORIES
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isCategorySearchCollapsed}
        onCollapse={() => setIsCategorySearchCollapsed(true)}
      />
      {!isCategoryAddCollapsed && (
        <Form setIsCategoryAddCollapsed={setIsCategoryAddCollapsed} />
      )}
      <MenuBar.Block count={10} label="Getting Started" />
      <MenuBar.Block count={10} label="Misc" />
    </MenuBar>
  );
};

export default SideMenuBar;