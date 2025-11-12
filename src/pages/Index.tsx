import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

const Index = () => {
  const [activeSection, setActiveSection] = useState("introduccion");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <ContentArea activeSection={activeSection} />
    </div>
  );
};

export default Index;
