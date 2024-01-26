let me = {
  name: 'John Snow',
  inArrow: function () {
    return () => {
      console.log('My name is ' + this.name);
    };
  },
  inRegular() {
    console.log('My name is ' + this.name);
  }
};
me.inArrow()();
me.inRegular();
