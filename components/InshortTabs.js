import { useWindowDimensions } from "react-native";
import React, { useContext, useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";

const InshortTabs = () => {
    // this lay out will be use for identifying of our app 
    const layout = useWindowDimensions()

    //  defining state
    // const [index, setIndex] = useState(1);

    const {index, setIndex} = useContext(NewsContext);


    //  creating routes
    const [routes] = useState([
      { key: "first", title: "Discover" },
      { key: "second", title: "News" },
    ]);
  

    //  To render
    const renderScene = SceneMap({
      first: DiscoverScreen,
      second: NewsScreen,
    });

  return (

    <TabView
    navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width: layout.width}}
    renderTabBar={()=> <TopNavigation
    index={index}
    setIndex={setIndex}
    />}
    />
  );
};

export default InshortTabs;
