import * as React from 'react';
import styles from './ATest.module.scss';
import type { IATestProps } from './IATestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PDFJSComponent } from './PDFJSComponent';

export default class ATest extends React.Component<IATestProps, {}> {
  public render(): React.ReactElement<IATestProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.aTest} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <PDFJSComponent />
        </div>
      </section>
    );
  }
}
