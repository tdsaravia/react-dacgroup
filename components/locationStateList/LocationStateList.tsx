import React, { useEffect, useState } from 'react';
import styles from './LocationStateList.module.scss';

interface State {
  name: string;
}

const LocationStateList: React.FC = () => {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    fetch('/states.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStates(data.states);
      });
  }, [states]);

  const groupStatesByFirstLetter = (
    states: State[]
  ): { [letter: string]: State[] } => {
    try {
      return states.reduce((groups: { [letter: string]: State[] }, state) => {
        const letter = state.name[0].toUpperCase();
        if (groups[letter]) {
          groups[letter].push(state);
        } else {
          groups[letter] = [state];
        }
        return groups;
      }, {});
    } catch (error) {
      console.error(error);
      return {};
    }
  };

  const stateGroups = groupStatesByFirstLetter(states);

  return (
    <div className={styles.locations_container}>
      <div>
        <h2>The Fresh Market Locations</h2>
      </div>
      <div className={styles.container}>
        {Object.keys(stateGroups)
          .sort()
          .map((letter) => (
            <div key={letter} className={styles.location}>
              <h3 className={styles.firstLetter}>{letter}</h3>
              <ul className={styles.list}>
                {stateGroups[letter]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((state) => (
                    <li className={styles.item} key={state.name}>
                      {state.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LocationStateList;
