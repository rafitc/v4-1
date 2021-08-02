/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import TitleWithRect from './TitleWithRect';
import ThingsWeDo from './ThingsWeDo';
import OurInitiatives from './OurInitiatives';

const MainPageExtras = ({ref}) => {
  return (
    <div className={css(styles.root)} ref={ref}>
      <TitleWithRect name="Things we do" />
      <ThingsWeDo />

      <div className={css(styles.space)} />
      <TitleWithRect name="Our Initiatives" />
      <OurInitiatives />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  space: {
    marginTop: 120,
  },
});

export default MainPageExtras;
