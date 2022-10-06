import { useEffect } from "react";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { Album } from "types/album/Album";
import { getAlbumList } from "store/albums.slice";
import { getUserList } from "store/users.slice";
import { RootState } from "store/store";

export default function AlbumList() {
  const dispatch = useDispatch();
  const { albumList, loading } = useSelector(
    (state: RootState) => state.albums
  );
  const { userList } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getAlbumList());
    dispatch(getUserList());
  }, [dispatch]);

  const getUserName = (userId: number | null): string => {
    const user = userList.find((data) => data.id === userId);
    if (user) {
      return user.name;
    }
    return "";
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "80px"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true
    },
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
      render: (text, data: Album, rowKey) => (
        <Link to={`/user/detail/${data.userId}`}>
          {getUserName(data.userId)}
        </Link>
      )
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "100px",
      render: (text, data: Album, rowKey) => (
        <Space>
          <Link to={`/album/detail/${data.id}`}>
            <Button>
              <EyeOutlined />
            </Button>
          </Link>
        </Space>
      )
    }
  ];

  return <Table loading={loading} columns={columns} dataSource={albumList} />;
}
