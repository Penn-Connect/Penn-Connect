import React from "react";
import Header from "./global-components/Header";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      <Header name={"Pijamo Ngullie"} />
      {currentUser && currentUser.email}
    </div>
  );
}
