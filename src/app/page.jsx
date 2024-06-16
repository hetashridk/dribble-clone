'use client'
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { info } from '../../lib/constants';
import Content from '../../components/Content';

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState('discover');
  const [sortType, setSortType] = useState('all');
  const [likedImageList, setLikedImageList] = useState({});

  const sortedData = info.sort((a, b) => {
      if (sortType?.toLowerCase() === 'popular') {
          return b.likes - a.likes;
      } 
      else if (sortType?.toLowerCase() === 'new') {
          return new Date(b.date) - new Date(a.date);
      } 
      else if (sortType?.toLowerCase() === 'noteworthy') {
          return b.views - a.views;
      } 
      else {
          return info;
      }
  });

  const filteredData = sortedData.filter(item => {
      return categoryFilter === 'discover' || item.category === categoryFilter;
  });

  const toggleLike = (id) => {
      setLikedImageList(prev => ({
          ...prev,
          [id]: !prev[id]
      }));
  };


  return (
    <>
      <Navbar />
      <Content
        filteredData={filteredData} 
        toggleLike={toggleLike} 
        sortType={sortType} 
        setSortType={setSortType} 
        categoryFilter={categoryFilter} 
        setCategoryFilter={setCategoryFilter} 
        likedImageList={likedImageList} 
      />
    </>
  );
}
