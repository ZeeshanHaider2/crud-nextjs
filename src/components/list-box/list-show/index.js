import React from "react";

async function getListData() {
  const fetchList = await fetch("http://localhost:3000/api/list", {
    method: "GET",
    cache: "no-cache",
  });
  if (!fetchList.ok) {
    throw new Error("Failed to fetch data");
  }
  const listData = await fetchList.json();
  return listData.data;
}
const ListShow = async () => {
  const listData = await getListData();
  console.log("listdata", listData);

  return (
    <div>
      {listData.map((list, id) => (
        <div key={list?.id}>{list?.title}</div>
      ))}
    </div>
  );
};

export default ListShow;
