import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder=""
          className="h-14 text-base border-2 border-primary/30 focus:border-primary rounded-xl"
        />
        <Button
          onClick={handleSearch}
          className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium"
        >
          <Search className="w-5 h-5 mr-2" />
          검색
        </Button>
      </div>
    </div>
  );
};
