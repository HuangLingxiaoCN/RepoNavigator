import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import ManageHeader from "./ManageHeader";
import ManageTable from "./ManageTable";

import "./ManageBody.scss";

function ManageBody() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRepos, setSelectedRepos] = useState([]);
  const [showDelModal, setShowDelModal] = useState(false);
  // 删除确认键倒数
  const [countDown, setCountDown] = useState(0);
  const [showVisibilityModal, setShowVisibilityModal] = useState(false);
  const [VisibilityModalType, setVisibilityModalType] = useState("");

  console.log(selectedRepos);

  const handleVisibilityModal = (type, boolean) => {
    setShowVisibilityModal(boolean);
    if (type === "private") {
      setVisibilityModalType("private");
    } else if (type === "public") {
      setVisibilityModalType("public");
    }
  };

  return (
    <div className="manage-body">
      <ManageHeader
        setSearchValue={setSearchValue}
        selectedRowKeys={selectedRowKeys}
        setShowDelModal={setShowDelModal}
        // 删除确认键倒数
        setCountDown={setCountDown}
        handleVisibilityModal={handleVisibilityModal}

        // setShowVisibilityModal={setShowVisibilityModal}
      />
      <ManageTable
        searchValue={searchValue}
        selectedRowKeys={selectedRowKeys}
        setSelectedRowKeys={setSelectedRowKeys}
        setSelectedRepos={setSelectedRepos}
      />

      <DeleteModal
        showDelModal={showDelModal}
        setShowDelModal={setShowDelModal}
        countDown={countDown}
        setCountDown={setCountDown}
        selectedRepos={selectedRepos}
      />
      <VisibilityModal
        showVisibilityModal={showVisibilityModal}
        setShowVisibilityModal={setShowVisibilityModal}
        selectedRepos={selectedRepos}
        VisibilityModalType={VisibilityModalType}
      />
    </div>
  );
}

function DeleteModal(props) {
  const {
    countDown,
    setCountDown,
    setShowDelModal,
    showDelModal,
    selectedRepos,
  } = props;

  const hideModal = () => {
    setShowDelModal(false);
    // clearInterval(timer);
  };

  useEffect(() => {
    if (showDelModal === false) {
      return;
    }

    const timer = setInterval(() => {
      if (countDown > 0) setCountDown((prevCount) => prevCount - 1);
      else clearInterval(timer);
    }, 1000);

    console.log(countDown);

    return () => {
      clearInterval(timer);
    };
  }, [countDown]);

  return (
    <Modal
      title=<div className="delModal-title">
        <ExclamationCircleOutlined className="delModal-title-icon" />
        Confirm
      </div>
      open={showDelModal}
      onOk={hideModal}
      onCancel={hideModal}
      okText={<span>{countDown !== 0 ? countDown : ""} 确认</span>}
      cancelText="取消"
      okButtonProps={{
        disabled: countDown !== 0,
      }}
      // disabled={countDown !== 0}
    >
      <h2>Are you sure?</h2>
      <p>
        <span className="delModal-repo-name">
          {selectedRepos.map((repo, index) => {
            return index === selectedRepos.length - 1
              ? repo.name + " "
              : repo.name + ", ";
          })}
        </span>
        will be deleted permanently!
      </p>
    </Modal>
  );
}

function VisibilityModal(props) {
  const { VisibilityModalType, selectedRepos } = props;

  const hideModal = () => {
    props.setShowVisibilityModal(false);
  };

  return (
    <Modal
      title=<div className="delModal-title">Confirm</div>
      open={props.showVisibilityModal}
      onOk={hideModal}
      onCancel={hideModal}
      okText="确认"
      cancelText="取消"
    >
      <p>
        <span className="delModal-repo-name">
          {selectedRepos.map((repo, index) => {
            return index === selectedRepos.length - 1
              ? repo.name + " "
              : repo.name + ", ";
          })}
        </span>
        will become {VisibilityModalType}.
      </p>
    </Modal>
  );
}

export default ManageBody;
