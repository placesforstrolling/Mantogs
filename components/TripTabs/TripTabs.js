import React, {useState} from "react";
import { TabView, SceneMap } from 'react-native-tab-view';

import {
    Text, 
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import SingleTab from "../SingleTab/SingleTab";


const data = {
    all: [
        {
            image: 'https://clck.ru/qF3d2',
            title: 'Explore The Snow',
            country: 'Sweden'
        },
        {
            image: 'https://clck.ru/qF3d2',
            title: 'Explore The Snow',
            country: 'Sweden1'
        },
        {
            image: 'https://clck.ru/qF3d2',
            title: 'Explore The Snow',
            country: 'Sweden1'
        },
    ],
    popular: [
        {
            image: 'https://clck.ru/qF8fj',
            title: 'Explore The Mountains',
            country: 'Sweden1'
        },
        {
            image: 'https://clck.ru/qF8fj',
            title: 'Explore The Mountains',
            country: 'Sweden1'
        },
        {
            image: 'https://clck.ru/qF8fj',
            title: 'Explore The Mountains',
            country: 'Sweden1'
        },
    ],
    recomendation: [
        {

        },
    ],
    cheapest: [
        {

        },
    ]
};


const FirstRoute = () => (
  <ScrollView style={null} horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.all.map((item, i) => (
        <SingleTab
            key={i}
            image={item.image}
            title={item.title}
            country={item.country}
            />
      ))}
  </ScrollView>
);

const SecondRoute = () => (
    <ScrollView style={null} horizontal={true} showsHorizontalScrollIndicator={false}>
    {data.popular.map((item, i) => (
      <SingleTab
          key={i}
          image={item.image}
          title={item.title}
          country={item.country}
          />
    ))}
</ScrollView>
);

const ThirdRoute = () => (
    <ScrollView style={null} horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.recomendation.map((item, i) => (
        <SingleTab
            key={i}
            image={item.image}
            title={item.title}
            country={item.country}
            />
      ))}
  </ScrollView>
  );

  const FourthRoute = () => (
    <ScrollView style={null} horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.cheapest.map((item, i) => (
        <SingleTab
            key={i}
            image={item.image}
            title={item.title}
            country={item.country}
            />
      ))}
  </ScrollView>
  );


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});



const TripTabs = ({navigation}) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
        { key: 'fourth', title: 'Fourth' },
    ]);

    return (
        <>
        
        <View style={styles.tripTabs}>

            <Text style={styles.greating}>Hi, Mustafa</Text>
            <Text style={styles.title}>Where would you {'\n'}like to go?</Text>

        </View>
        <View style={styles.tab}>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            indicatorStyle={{ backgroundColor: 'white' }}
            tabStyle={{ backgroundColor: '#000', minHeight: 30 }}
            disableSwipe={true}
            />
        </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    tabView: {
        minHeight: 10,
    },
    tab: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 0
    },
    title: {
        color: '#404a4f',
        fontSize: 24,
        fontWeight: '800'
    },
    greating: {
        color: '#8e9599',
        fontSize: 14,
        fontWeight: '700'
    },
    tripTabs: {
        width: '100%',
        padding: 20
    }
})

export default TripTabs;