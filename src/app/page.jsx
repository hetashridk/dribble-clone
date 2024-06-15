'use client'
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import SwitchTab from '../../components/SwitchTab';
import { info } from '../../lib/constants';

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState('Discover');
  const [sortType, setSortType] = useState('all');
  const [likedImages, setLikedImages] = useState({});

  const sortedData = info.sort((a, b) => {
      if (sortType === 'popular') {
          return b.likes - a.likes;
      } else if (sortType === 'new') {
          return new Date(b.date) - new Date(a.date);
      } else if (sortType === 'worthy') {
          return b.views - a.views;
      } else {
          return info; // No sorting for 'all'
      }
  });

  const filteredData = sortedData.filter(item => {
      return categoryFilter === 'Discover' || item.category === categoryFilter;
  });

  const toggleLike = (id) => {
      setLikedImages(prev => ({
          ...prev,
          [id]: !prev[id]
      }));
  };

  return (
    <>
      <Navbar />
      <SwitchTab
        filteredData={filteredData} 
        toggleLike={toggleLike} 
        sortType={sortType} 
        setSortType={setSortType} 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        likedImages={likedImages} />
    </>
  );
}
