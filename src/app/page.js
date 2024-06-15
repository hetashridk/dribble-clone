'use client'
import { useState } from 'react';
// import ContentTabs from '../../components/ContentTabs';
// import CategoryMenu from '../../components/CategoryMenu';
// import SearchBar from '../../components/SearchBar';
// import ImageGrid from '../../components/ImageGrid';
import Navbar from '../../components/Navbar';
import SwitchTab from '../../components/SwitchTab';

export default function Home() {
  const [currentTab, setCurrentTab] = useState('Popularity');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar />
      <SwitchTab />
    </>
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4">Dribbble Clone</h1>
    //   <ContentTabs onTabChange={setCurrentTab} />
    //   <CategoryMenu onCategoryChange={setCurrentCategory} />
    //   <SearchBar onSearch={setSearchQuery} />
    //   <ImageGrid />
    // </div>
  );
}
