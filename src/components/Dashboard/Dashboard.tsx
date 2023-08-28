"use client";
import React, { useState } from "react";
import Panel from "./Panel";
import Feed from "./Feed";

function Dashboard(props: { rawData: Object[] }) {
  const { rawData } = props;
  return (
    <div>
      {/* panel */}
      <Panel />
      <Feed productRequests={rawData.productRequests} />
    </div>
  );
}

export default Dashboard;
