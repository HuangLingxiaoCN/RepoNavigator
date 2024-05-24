import React from "react";
import { useState } from "react";
import { Space, Table } from "antd";

import tableData from "../mock/tableData";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (repoUrl) => <a href="#">{repoUrl}</a>,
  },
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Forked",
    dataIndex: "forked",
    key: "forked",
  },
  {
    title: "Collaborators",
    dataIndex: "collaborators",
    key: "collaborators",
  },
  {
    title: "Contributors",
    dataIndex: "contributors",
    key: "contributors",
  },
  {
    title: "Forks",
    dataIndex: "forks",
    key: "forks",
  },
  {
    title: "Stars",
    dataIndex: "stars",
    key: "stars",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Updated At",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
];

function ManageTable(props) {

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    props.setSelectedRowKeys(newSelectedRowKeys);

    // 
    const selectedData = tableData.filter((item) => {
        if(newSelectedRowKeys.includes(item.key))
            return item;
    })
    props.setSelectedRepos(selectedData);
  };
  const rowSelection = {
    selectedRowKeys: props.selectedRowKeys,
    onChange: onSelectChange,
  };

  console.log("search value:", props.searchValue);

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={tableData.filter((item) =>
        item.name.includes(props.searchValue)
      )}
      bordered
    />
  );
}

export default ManageTable;
