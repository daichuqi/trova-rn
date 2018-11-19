import Colors from '../theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    showLabel: true,
    // activeBackgroundColor: 'rgba(0,0,0,0.2)',
    // inactiveBackgroundColor: 'white',
    // tabBarStyle: { backgroundColor: 'white' },
    // labelStyle: { color: 'gray' },
    activeTintColor: Colors.brandPrimary,
  },
};
