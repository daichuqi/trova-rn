import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import DefaultProps from '../constants/Navigation';

import Home from '../screens/Home';
import Links from '../screens/Links';
import Mypage from '../screens/MyPage';

const TabIcon = ({ focused, name }) => (
  <Icon size={25} color={focused ? 'orange' : 'gray'} name={name} />
);

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs key="tabbar" type="replace" {...DefaultProps.tabProps}>
        <Stack
          key="home"
          title="Home"
          icon={({ focused }) => <TabIcon name="home" focused={focused} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={Home} />
        </Stack>

        <Stack
          key="links"
          title="Links"
          icon={({ focused }) => <TabIcon name="rocket" focused={focused} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="recipes" component={Links} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={({ focused }) => <TabIcon name="apple" focused={focused} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={Mypage} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
