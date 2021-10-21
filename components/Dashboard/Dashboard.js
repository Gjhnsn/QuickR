import React from "react";
import QrContainer from "../QrContainer/QrContainer";
import UrlModal from "../UrlModal/UrlModal";
import FolderContainer from "../folder/FolderContainer/FolderContainer";
import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      
      <QrContainer />
      {/* URL Modal needs a toggle function */}
      <UrlModal/>
      <FolderContainer />
    </Container>
  );
};

export default Dashboard;