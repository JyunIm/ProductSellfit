import { SearchBar } from "@/components/SearchBar";
import { TabNavigation } from "@/components/TabNavigation";
import { TrendingKeywords } from "@/components/TrendingKeywords";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            💰 오늘의 상품 - 셀픽
          </h1>
          
          {/* Tab Navigation */}
          <TabNavigation />
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* Trending Keywords */}
        <TrendingKeywords />
      </div>
    </div>
  );
};

export default Index;
