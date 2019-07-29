import React from 'react';

import Random from 'utils/Random';

import Spray1 from 'assets/Spray/Path1.svg';
import Spray2 from 'assets/Spray/Path2.svg';
import Spray3 from 'assets/Spray/Path3.svg';
import Spray4 from 'assets/Spray/Path4.svg';
import { SVG } from './BackgroundSpray.style';

class BackgroundSpray extends React.PureComponent {
  state = {
    maxHeight: 0,
    items: [],
  };

  componentDidMount() {
    this.setState({ maxHeight: document.body.scrollHeight });
    setTimeout(() => {
      this.generateIteams('left');
      this.generateIteams('right');
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.igniter){
  //     //this.setState({items: []});
  //     this.setState({ maxHeight: document.body.scrollHeight });
  //     setTimeout(() => {
  //       this.generateIteams('left');
  //       this.generateIteams('right');
  //     });
  //   }
  // }

  getRandomShapes() {
    const array = [Spray1, Spray2, Spray3, Spray4];
    return Random.randomArrayValue(array);
  }

  generateIteams(side = 'left') {
    const { maxHeight, items } = this.state;
    const padding = 30;
    const _items = [];
    let value = maxHeight;

    for (let index = 0; index < value; index++) {
      const height = Random.randomInt(300, 500);
      const color = Random.randomHexColor();
      const shape = this.getRandomShapes();
      let position = 0;

      if (_items.length) {
        const last = _items[_items.length - 1];
        position =
          last.position + padding + last.height + Random.randomInt(10, 200);
      } else {
        position = padding + Random.randomInt(10, 200);
      }

      index += height / 0.6;

      const item = {
        height: height,
        color: color,
        shape: shape,
        position: position,
        side: side,
        id: Random.randomInt(0, 100000) + Random.randomHexColor(),
      };
      _items.push(item);
    }

    this.setState({ items: [...items, ..._items] });
  }

  generateStyle(item) {
    const payload = {
      height: item.height,
      top: item.position,
      left: 0,
    };

    if (item.side === 'right') {
      delete payload.left;
      payload.right = 0;
      payload.transform = 'scaleX(-1)';
    }
    return payload;
  }

  render() {
    const { items } = this.state;
    return (
      <>
        {items.map(item => (
          <SVG
            src={item.shape}
            key={item.id}
            style={this.generateStyle(item)}
          />
        ))}
      </>
    );
  }
}

export default BackgroundSpray;
