import { CSSProperties } from 'react';

import ScrollSync from './components/ScrollSync/ScrollSync';
import { ScrollSyncElement } from './components/ScrollSync/ScrollSyncElement';

function App() {
  const cellStyle: CSSProperties = {
    minWidth: 200,
    padding: '.5em 1em',
    textAlign: 'left',
    borderLeft: '1px solid white',
    borderBottom: '1px solid white',
  };

  return (
    <div>
      <ScrollSync>
        <div style={{ display: 'flex', position: 'relative', height: 300 }}>
          <ScrollSyncElement>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 500 }}>
                <h1>Left Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>

          <ScrollSyncElement>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 1000 }}>
                <h1>Middle Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>

          <ScrollSyncElement>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 2000 }}>
                <h1>Right Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>
        </div>
      </ScrollSync>

      <ScrollSync>
        <div style={{ display: 'flex', position: 'relative', height: 300 }}>
          <ScrollSyncElement group='one'>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 500 }}>
                <h1>Left Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>

          <ScrollSyncElement group='two'>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 1000 }}>
                <h1>Middle Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>

          <ScrollSyncElement group='one'>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 2000 }}>
                <h1>Right Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>

          <ScrollSyncElement group='two'>
            <div style={{ overflow: 'auto' }}>
              <section style={{ height: 2000 }}>
                <h1>Right Pane Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloribus
                  dolorum est eum eveniet exercitationem iste labore minus, neque nobis odit
                  officiis omnis possimus quasi rerum sed soluta veritatis.
                </p>
              </section>
            </div>
          </ScrollSyncElement>
        </div>
      </ScrollSync>

      <ScrollSync>
        <div style={{ display: 'flex', position: 'relative', height: 300 }}>
          <table style={{ minWidth: 200, borderCollapse: 'collapse' }}>
            <thead
              style={{
                display: 'block',
                minWidth: 200,
                overflow: 'auto',
                color: 'white',
                background: 'grey',
              }}
            >
              <tr>
                <th style={cellStyle}>Fixed Column Header</th>
              </tr>
            </thead>
            <ScrollSyncElement group='vertical'>
              <tbody
                style={{
                  display: 'block',
                  minWidth: 200,
                  height: 200,
                  overflowY: 'auto',
                  background: 'lightblue',
                }}
              >
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 1</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 2</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 3</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 4</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 5</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 6</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 7</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 8</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 9</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 10</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 11</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Fixed Column, Row 12</td>
                </tr>
              </tbody>
            </ScrollSyncElement>
          </table>
          <table style={{ width: 400, borderCollapse: 'collapse' }}>
            <ScrollSyncElement group='horizontal'>
              <thead
                style={{
                  display: 'block',
                  width: 400,
                  overflow: 'auto',
                  color: 'white',
                  background: 'black',
                }}
              >
                <tr>
                  <th style={cellStyle}>Table 2 - Header 1</th>
                  <th style={cellStyle}>Table 2 - Header 2</th>
                  <th style={cellStyle}>Table 2 - Header 3</th>
                </tr>
              </thead>
            </ScrollSyncElement>
            <ScrollSyncElement group={['horizontal', 'vertical']}>
              <tbody
                style={{
                  display: 'block',
                  width: 400,
                  height: 200,
                  overflow: 'auto',
                  background: 'pink',
                }}
              >
                <tr>
                  <td style={cellStyle}>Cell 1, Row 1</td>
                  <td style={cellStyle}>Cell 2, Row 1</td>
                  <td style={cellStyle}>Cell 3, Row 1</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 2</td>
                  <td style={cellStyle}>Cell 2, Row 2</td>
                  <td style={cellStyle}>Cell 3, Row 2</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 3</td>
                  <td style={cellStyle}>Cell 2, Row 3</td>
                  <td style={cellStyle}>Cell 3, Row 3</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 4</td>
                  <td style={cellStyle}>Cell 2, Row 4</td>
                  <td style={cellStyle}>Cell 3, Row 4</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 5</td>
                  <td style={cellStyle}>Cell 2, Row 5</td>
                  <td style={cellStyle}>Cell 3, Row 5</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 6</td>
                  <td style={cellStyle}>Cell 2, Row 6</td>
                  <td style={cellStyle}>Cell 3, Row 6</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 7</td>
                  <td style={cellStyle}>Cell 2, Row 7</td>
                  <td style={cellStyle}>Cell 3, Row 7</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 8</td>
                  <td style={cellStyle}>Cell 2, Row 8</td>
                  <td style={cellStyle}>Cell 3, Row 8</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 9</td>
                  <td style={cellStyle}>Cell 2, Row 9</td>
                  <td style={cellStyle}>Cell 3, Row 9</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 10</td>
                  <td style={cellStyle}>Cell 2, Row 10</td>
                  <td style={cellStyle}>Cell 3, Row 10</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 11</td>
                  <td style={cellStyle}>Cell 2, Row 11</td>
                  <td style={cellStyle}>Cell 3, Row 11</td>
                </tr>
                <tr>
                  <td style={cellStyle}>Cell 1, Row 12</td>
                  <td style={cellStyle}>Cell 2, Row 12</td>
                  <td style={cellStyle}>Cell 3, Row 12</td>
                </tr>
              </tbody>
            </ScrollSyncElement>
          </table>
        </div>
      </ScrollSync>
    </div>
  );
}

export default App;
