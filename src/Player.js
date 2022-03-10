import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Player() {
  const query = useQuery();

  return (
    <>
      <ReactPlayer url={query.get("url")} />
    </>
  );
}

export default Player;
