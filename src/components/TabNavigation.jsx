import { useState } from "react";

const tabs = [
  { id: "keyword", label: "키워드 분석" },
  { id: "calculator", label: "수수료 계산기" },
  { id: "content", label: "콘텐츠" },
];

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("keyword");

  return (
    <div className="flex gap-6 border-b border-border mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 px-2 font-medium transition-colors relative ${
            activeTab === tab.id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
};
