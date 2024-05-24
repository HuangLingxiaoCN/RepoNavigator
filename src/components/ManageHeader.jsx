import React from "react";
import { useState } from "react";
import { Input, Button, Modal } from "antd";
const { Search } = Input;

import refresh from "../assets/refresh.png";

import lock from "../assets/lock.png";
import unlock from "../assets/unlock.png";

import deleteIcon from "../assets/deleteIcon.png";
import "./ManageHeader.scss";

function ManageHeader(props) {
  //   const [searchValue, setSearchValue] = useState("");

  const onSearch = (value, _e, info) => {
    props.setSearchValue(value);
  };

  const buttonValues = [
    {
      src: deleteIcon,
      name: "Delete",
    },
    {
      src: lock,
      name: "Make private",
      type: "private",
    },
    {
      src: unlock,
      name: "Make public",
      type: "public",
    },
  ];

  return (
    <div>
      <h1 className="manageHeader-title">Manage your repositories</h1>
      <div className="manageHeader-actions">
        <Search
          placeholder="Search repositories"
          onSearch={onSearch}
          allowClear
          style={{
            width: 300,
          }}
        />
        <div className="buttons-group">
          <Button>
            <div className="buttons-group-div">
              <img src={refresh} />
              <span>Refresh</span>
            </div>
          </Button>

          {buttonValues.map((button, index) => (
            <Button
              key={index}
              disabled={props.selectedRowKeys.length === 0 ? true : false}
              onClick={
                button.name === "Delete"
                  ? () => {
                      props.setShowDelModal(true);
                      props.setCountDown(5);
                    }
                  : //   ? () => props.confirm
                    () => props.handleVisibilityModal(button.type, true)
              }
            >
              <div className="buttons-group-div">
                <img src={button.src} />
                <span>{button.name}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageHeader;
